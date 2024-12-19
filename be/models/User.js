const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // Hashed password
  // Add other relevant fields
});

module.exports = mongoose.model('User', UserSchema);
