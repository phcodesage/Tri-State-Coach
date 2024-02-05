const mongoose = require('mongoose');

const QuoteRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  company: String,
  // Add other fields as necessary
});

const QuoteRequest = mongoose.model('QuoteRequest', QuoteRequestSchema);

module.exports = QuoteRequest;
