// models/Line.js
const mongoose = require('mongoose');

const lineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  products: { type: Number, required: true },
  modified: { type: Date, required: true },
  published: { type: Date, required: true },
});

module.exports = mongoose.model('Line', lineSchema);
