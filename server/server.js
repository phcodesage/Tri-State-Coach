const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const QuoteRequest = require('./models/QuoteRequest');
const ContactForm = require('./models/ContactForm');
require('dotenv').config();
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Stripe secret key is missing.');
  process.exit(1);
}
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const jwt = require('jsonwebtoken');
const Ticket = require('./models/Ticket');
const Line = require('./models/Line')

function calculateOrderAmount(items) {
  // For simplicity, let's assume each item has a 'price' field
  return items.reduce((total, item) => total + item.price, 0);
}



const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, username: 'admin', password: '$2a$10$...' } // hashed password
];
// SMTP Transporter
const transporter = nodemailer.createTransport({
  host: 'shamuscoachbus.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'contact@shamuscoachbus.com',
    pass: 'sq9A#5{*!)IT'
  }
});

app.use((error, req, res, next) => {
  console.error(error); // Log the error for debugging
  res.status(500).json({ error: 'Internal Server Error' }); // Respond with JSON
});

app.get('/', (req, res) => {
  res.send('Welcome to the tristate-coach-backend!')
})

// Middleware to check if the user is already authenticated
function checkAlreadyAuthenticated(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return next(); // No token, user not authenticated yet, proceed to login
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(); // Invalid token, proceed to login
    }

    // Valid token, user already authenticated
    return res.status(403).send('You are already logged in');
  });
}

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    // User authenticated, create a token
    const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});


// Example of a protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the protected route, authenticated user!' });
});


// Route to handle form submission
app.post('/quote-request', async (req, res) => {
  try {
    const newQuoteRequest = new QuoteRequest(req.body);
    await newQuoteRequest.save();

    // Sending email
    const mailOptions = {
      from: 'contact@shamuscoachbus.com',
      to: 'rechcel@memelope.com',
      subject: 'New Quote Request',
      text: `You have a new quote request: \nName: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
      // You can format the email body as per your requirements
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email: ', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).send('Quote request submitted and email sent successfully');
  } catch (error) {
    console.log(error);
    res.status(400).send('Error processing request');
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a new document using the ContactForm model
  const newContactForm = new ContactForm({ name, email, message });

  try {
    // Save the document to the database
    await newContactForm.save();

    // Send the email using Nodemailer (as previously set up)
    // ...

    res.status(200).send('Form submitted and email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing your request');
  }
});

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  if (amount === undefined) {
    return res.status(400).send({ error: "Amount is required" });
  }

  try {
    const orderAmount = amount * 100; // $1 per count, amount in cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount: orderAmount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send({ error: 'Error creating payment intent' });
  }
});

// Endpoint to create a new ticket
app.post('/api/tickets', async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.status(201).send(newTicket);
  } catch (error) {
    res.status(400).send('Error creating new ticket');
  }
});

// Endpoint to get all tickets
app.get('/api/tickets', async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    res.status(200).send(tickets);
  } catch (error) {
    res.status(500).send('Error fetching tickets');
  }
});

// Endpoint to update a ticket
app.put('/api/tickets/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(ticket);
  } catch (error) {
    res.status(400).send('Error updating ticket');
  }
});

// Endpoint to delete a ticket
app.delete('/api/tickets/:id', async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Error deleting ticket');
  }
});

app.post('/api/lines', authenticateToken, async (req, res) => {
  try {
    const newLine = new Line(req.body);
    await newLine.save();
    res.status(201).json(newLine); // send back the created line as JSON
  } catch (error) {
    console.error('Error creating new line:', error);
    res.status(400).json({ message: 'Error creating new line', error: error.message });
  }
});

// Endpoint to get all lines
app.get('/api/lines', authenticateToken, async (req, res) => {
  try {
    const lines = await Line.find({});
    res.json(lines); // respond with JSON
  } catch (error) {
    console.error("Error fetching lines:", error);
    res.status(500).json({ error: 'Error fetching lines' });
  }
});

app.patch('/api/lines/:id/archive', authenticateToken, async (req, res) => {
  try {
    const line = await Line.findByIdAndUpdate(req.params.id, { archived: true }, { new: true });
    res.status(200).send(line);
  } catch (error) {
    res.status(400).send('Error archiving line');
  }
});

// Endpoint to delete a line
app.delete('/api/lines/:id', authenticateToken, async (req, res) => {
  try {
    await Line.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Error deleting line');
  }
});

// Endpoint to duplicate a line
app.post('/api/lines/:id/duplicate', authenticateToken, async (req, res) => {
  try {
    const lineToDuplicate = await Line.findById(req.params.id);
    if (!lineToDuplicate) {
      return res.status(404).send('Line not found');
    }
    const duplicatedLine = new Line({ ...lineToDuplicate.toObject(), _id: mongoose.Types.ObjectId(), isNew: true });
    await duplicatedLine.save();
    res.status(201).send(duplicatedLine);
  } catch (error) {
    res.status(500).send('Error duplicating line');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
