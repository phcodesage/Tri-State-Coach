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

// Middleware to authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


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



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
