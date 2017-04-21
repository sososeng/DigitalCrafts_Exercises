// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var TeaSchema   = new mongoose.Schema({
  name: String,
  quantity: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Tea', TeaSchema);