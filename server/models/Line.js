
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const lineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  itemId: { type: String, required: true, default: uuidv4 },
  created: { type: Date, default: Date.now },
  lastEdited: { type: Date, default: Date.now },
  lastPublished: { type: Date },
  status: { type: String, required: true, enum: ['Draft', 'Published'], default: 'Draft' },
  productsCount: { type: Number, default: 0 },
  products: [{
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // or String if you're not using ObjectId
    count: { type: Number, required: true, default: 1 }
  }]
});

module.exports = mongoose.model('Line', lineSchema);
