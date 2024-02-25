const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Ensure you have UUID available if you're generating SKUs or slugs

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
  },
  categories: [{
    type: String,
  }],
  images: [{
    type: String // URLs to the images
  }],
  price: {
    type: Number,
    required: true
  },
  compareAtPrice: Number,
  sku: {
    type: String,
    default: function() { return uuidv4(); }, // Default SKU generation
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
}, { timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' } }); // Enable timestamps

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
