// models/Ticket.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  productType: {
    type: String,
    enum: ['Physical', 'Digital', 'Service', 'Advance'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  description: String,
  images: [String], // assuming URLs to images
  price: {
    type: Number,
    required: true
  },
  compareAtPrice: Number,
  sku: String,
  trackInventory: Boolean,
  requireShipping: Boolean,
  // ... other fields as per your screenshot
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
