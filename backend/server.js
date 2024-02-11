const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const QuoteRequest = require('./models/QuoteRequest');
const ContactForm = require('./models/ContactForm');
require('dotenv').config();
const result = require('dotenv').config()
const { Parser } = require('json2csv');

if (result.error) {
  throw result.error
}


if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Stripe secret key is missing.');
  process.exit(1);
}
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Ticket = require('./models/Ticket');
const Line = require('./models/Line')
const authenticateToken = require('./middleware/authenticateToken')
const router = express.Router();

function calculateOrderAmount(items) {
  // For simplicity, let's assume each item has a 'price' field
  return items.reduce((total, item) => total + item.price, 0);
}

function jsonToCsv(jsonArray) {
  if (jsonArray.length === 0) {
    return '';
  }
  const headers = Object.keys(jsonArray[0]).join(',');
  const rows = jsonArray.map(obj => Object.values(obj).join(','));
  return [headers, ...rows].join('\n');
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


// Login Route
app.post('/login', async (req, res) => {
  // Log the environment variable for debugging purposes (consider removing this in production)
  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  // Destructure username and password from request body
  const { username, password } = req.body;

  // Log incoming credentials for debugging (remove sensitive data logging in production)
  console.log('Attempting login with:', { username, password });

  try {
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      // User authenticated, create a token
      const accessToken = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, { expiresIn: '15m' }); // short-lived
      const refreshToken = jwt.sign({ userId: 1 }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' }); // long-lived
      res.json({ accessToken, refreshToken });
    } else {
      // Log invalid login attempt
      console.log('Invalid credentials attempt:', { username });
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    // Log the error
    console.error('Error during login:', error.message);
    // Send a generic error message client-side
    res.status(500).json({ error: 'An error occurred during the login process' });
  }
});


app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const newAccessToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
    res.json({ accessToken: newAccessToken });
  });
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
      to: 'test@memelope.com',
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
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true // Make sure validators run on update
    });
    res.status(200).send(ticket);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: 'Error updating ticket', error: error.message });
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

app.post('/api/lines',  async (req, res) => {
  const { name, slug, status = 'Draft', products } = req.body;

  try {
    const newLine = new Line({
      name,
      slug,
      status, // Default to 'Draft' if not provided
      products,
      productsCount: products.reduce((acc, product) => acc + product.count, 0)
    });

    await newLine.save();
    res.status(201).json(newLine);
  } catch (error) {
    res.status(400).json({ message: 'Error creating line', error: error.message });
  }
});


// Endpoint to get all lines
app.get('/api/lines',  async (req, res) => {
  try {
    const lines = await Line.find({});
    res.json(lines); // respond with JSON
  } catch (error) {
    console.error("Error fetching lines:", error);
    res.status(500).json({ error: 'Error fetching lines' });
  }
});



app.patch('/api/lines/:id', async (req, res) => {
  const { status, ...otherUpdates } = req.body;
  try {
    const line = await Line.findById(req.params.id);
    if (!line) {
      return res.status(404).send('Line not found');
    }

    if (status) {
      line.status = status; // Update the status if provided in the request
    }
    // Apply other updates here
    await line.save();
    res.status(200).json(line);
  } catch (error) {
    res.status(400).json({ message: 'Error updating line', error: error.message });
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
// Endpoint to update or create a line
app.post('/api/lines/:id?', async (req, res) => {
  const { id } = req.params;
  const { status, ...lineData } = req.body;

  if (id) {
    // If an ID is provided, update the existing line
    try {
      const line = await Line.findById(id);
      if (!line) return res.status(404).send('Line not found');

      line.status = status;
      Object.assign(line, lineData);
      await line.save();
      res.status(200).json(line);
    } catch (error) {
      res.status(400).json({ message: 'Error updating line', error: error.message });
    }
  } else {
    // If no ID, create a new line
    try {
      const newLine = new Line({ ...lineData, status });
      await newLine.save();
      res.status(201).json(newLine);
    } catch (error) {
      res.status(400).json({ message: 'Error creating line', error: error.message });
    }
  }
});

app.get('/api/export-all', async (req, res) => {
  try {
    // Fetch all lines and tickets from the database
    const linesPromise = Line.find({}).lean();
    const ticketsPromise = Ticket.find({}).lean();
    const [lines, tickets] = await Promise.all([linesPromise, ticketsPromise]);

    // Combine lines and tickets into a single array
    const combinedData = [...lines, ...tickets];

    // Define fields for CSV, including handling of potential undefined products array
    const fields = [
      'name',
      'slug',
      'itemId',
      'created',
      'lastEdited',
      'lastPublished',
      'status',
      'productsCount',
      {
        label: 'products',
        value: row => row.products ? row.products.map(p => `ID: ${p.id}, Count: ${p.count}`).join('; ') : ''
      }
      // Add other fields as needed
    ];
    const json2csvParser = new Parser({ fields });
    const csvData = json2csvParser.parse(combinedData);

    // Set the headers to indicate a file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="combined_data.csv"');
    res.status(200).send(csvData);
  } catch (error) {
    console.error('Failed to export data:', error);
    res.status(500).send('Error exporting data to CSV.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 99000,
})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
