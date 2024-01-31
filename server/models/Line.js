const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const lineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  itemId: { type: String, required: true, default: uuidv4 }, // Automatically generate a unique item ID
  created: { type: Date, default: Date.now }, // Automatically set to the current date on creation
  lastEdited: { type: Date, default: Date.now }, // Automatically set to the current date on creation and needs to be updated on edits
  lastPublished: { type: Date }, // This can be null initially and set when the line is published
  status: { type: String, required: true, enum: ['Draft', 'Published'], default: 'Draft' }, // Status of the line
  productsCount: { type: Number, default: 0 } // Count of associated ticket products
});

module.exports = mongoose.model('Line', lineSchema);
