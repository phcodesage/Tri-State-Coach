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
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  categories: [{
    type: String,
  }],
  images: [{
    type: String
  }],
  price: {
    type: Number,
    required: true
  },
  compareAtPrice: Number,
  sku: {
    type: String,
    unique: true
  },
  trackInventory: {
    type: Boolean,
    default: false
  },
  inventoryQuantity: Number,
  inventoryPolicy: String,
  requiresShipping: {
    type: Boolean,
    default: false
  },
  createdOn: Date,
  updatedOn: Date,
  publishedOn: Date,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
