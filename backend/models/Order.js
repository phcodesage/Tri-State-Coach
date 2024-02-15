const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  status: { type: String, required: true, enum: ['Refunded', 'Pending', 'Completed', 'Cancelled'] }, // Add all possible statuses
  purchaseDetails: {
    items: [
      {
        itemName: { type: String, required: true },
        SKU: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true }
      }
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    stripeChargeId: { type: String, required: true }
  },
  orderHistory: [
    {
      event: { type: String, required: true },
      timestamp: { type: Date, required: true }
    }
  ],
  billingDetails: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    paymentMethod: {
      cardType: { type: String, required: true },
      lastFourDigits: { type: String, required: true, minlength: 4, maxlength: 4 }
    }
  },
  additionalInfo: {
    studentName: { type: String },
    studentEmail: { type: String, lowercase: true, trim: true },
    studentPhone: { type: String },
    parentName: { type: String },
    parentPhone: { type: String },
    parentEmail: { type: String, lowercase: true, trim: true },
    invoiceNumber: { type: String },
    stops: [
      {
        name: { type: String },
        studentName: { type: String },
        studentEmail: { type: String },
        studentPhone: { type: String }
      }
    ]
    // Additional fields can be added as necessary
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
