const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const QuoteRequest = require('./models/QuoteRequest');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;


// Route to handle form submission
app.post('/quote-request', async (req, res) => {
  try {
    const newQuoteRequest = new QuoteRequest(req.body);
    await newQuoteRequest.save();
    res.status(201).send('Quote request submitted successfully');
  } catch (error) {
    res.status(400).send('Error processing request');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
