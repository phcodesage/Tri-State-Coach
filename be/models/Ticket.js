const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  productsCollectionId: { type: String, required: true },
  productId: { type: String, required: true },
  variantsCollectionId: { type: String, required: true },
  variantId: { type: String, required: true },
  productHandle: { type: String, required: false }, // Adjusted to not require a unique constraint here
  productName: { type: String, required: true },
  status: { type: String, enum: ['Draft', 'Published'], required: true, default: 'Published' },
  productType: { type: String, enum: ['Physical', 'Digital', 'Service', 'Advanced'], required: true },
  productDescription: { type: String },
  productCategories: [{ type: String }],
  mainVariantImage: { type: String },
  moreVariantImages: [{ type: String }],
  variantPrice: { type: Number, required: true },
  variantCompareAtPrice: { type: Number },
  productTaxClass: { type: String },
  variantSku: { type: String }, // Removed the unique constraint
  variantInventory: { type: Number },
  requiresShipping: { type: Boolean, default: false },
  variantWeight: { type: Number },
  variantWidth: { type: Number },
  variantHeight: { type: Number },
  variantLength: { type: Number },
  variantDownloadName: { type: String },
  variantDownloadURL: { type: String },
  option1Name: { type: String },
  option1Value: { type: String },
  option2Name: { type: String },
  option2Value: { type: String },
  option3Name: { type: String },
  option3Value: { type: String },
  createdOn: { type: Date, required: true },
  updatedOn: { type: Date, required: true },
  publishedOn: { type: Date },
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true }
}, { timestamps: true });

// Convert price fields from string to number
ticketSchema.pre('save', function(next) {
  if (typeof this.variantPrice === 'string') {
    this.variantPrice = parseFloat(this.variantPrice.replace(/[^0-9.-]+/g,""));
  }
  if (this.variantCompareAtPrice && typeof this.variantCompareAtPrice === 'string') {
    this.variantCompareAtPrice = parseFloat(this.variantCompareAtPrice.replace(/[^0-9.-]+/g,""));
  }
  next();
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
