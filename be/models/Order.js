const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  status: { type: String, required: true, enum: ['Refunded', 'Pending', 'Completed', 'Cancelled'] },
  createdOn: { type: Date, required: true },
  refundedOn: { type: Date },
  customerFullName: { type: String, required: true },
  customerEmail: { type: String, required: true, lowercase: true, trim: true },
  billingAddress: {
    addressee: { type: String, required: true },
    line1: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: Number, required: true }
  },
  itemsCount: { type: Number, required: true },
  subtotal: { type: String, required: true }, // Consider changing to Number if possible
  discountsTotal: { type: String, required: true }, // Consider changing to Number if possible
  taxesTotal: { type: String, required: true }, // Consider changing to Number if possible
  orderTotal: { type: String, required: true }, // Consider changing to Number if possible
  currency: { type: String, required: true },
  stripeCustomerId: { type: String, required: true },
  stripeChargeId: { type: String, required: true },
  stripeRefundId: { type: String },
  requiresShipping: { type: Boolean, required: true },
  webflowTransactionFee: { type: String, required: true }, // Consider changing to Number if possible
  buyNow: { type: Boolean, required: true }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
 