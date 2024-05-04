const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const lineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  itemId: { type: String, required: true, default: uuidv4 },
  created: { type: Date, default: Date.now },
  lastEdited: { type: Date, default: Date.now },
  status: { type: String, required: true, enum: ['Draft', 'Published'], default: 'Draft' }, // Default to 'Draft' as per your form's functionality
  productsCount: { type: Number, default: 0 },
  products: [{ type: String }] // Assuming products are represented by their IDs as strings
});

module.exports = mongoose.model('Line', lineSchema);
