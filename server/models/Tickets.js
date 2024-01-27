const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  route: String,
  date: Date,
  seatNumber: Number,
  // Add other relevant fields
});

module.exports = mongoose.model('Ticket', TicketSchema);
