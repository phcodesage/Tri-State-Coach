const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const lineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  itemId: { type: String, required: true, default: uuidv4 },
  created: { type: Date, default: Date.now },
  lastEdited: { type: Date, default: Date.now },
  lastPublished: { type: Date },
  status: { type: String, required: true, enum: ['Draft', 'Published'], default: 'Published' },
  productsCount: { type: Number, default: 0 },
  products: [{
    productId: { type: String, required: true }, // Changed from 'id' for clarity and direct mapping to your data
    productName: { type: String, required: true }, // Added to store product name
    productType: { type: String, required: true }, // Added to store product type
    variantPrice: { type: String, required: true }, // Added to store variant price
    variantSku: { type: String, required: true }, // Added to store SKU
    productHandle: { type: String, required: true }, // Added for URL or identification purposes
    requiresShipping: { type: Boolean, default: false }, // Added to store shipping requirement
    productTaxClass: { type: String }, // Added for tax classification
    count: { type: Number, required: true, default: 1 }, // Count could be for inventory or other purposes
    mainVariantImage: { type: String }, // Added to store main image URL
    moreVariantImages: [{ type: String }] // Added to store additional images
  }]
});

module.exports = mongoose.model('Line', lineSchema);
