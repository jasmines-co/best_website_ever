const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  email:       { type: String },
  username:    { type: String },
  password:    { type: String },
  countryCode: { type: String },
  phoneNumber: { type: String },
  date:        { type: Date, default: Date.now },
  ETH: {type: String, required: false, max: 64},
});



module.exports = mongoose.model("user", userSchema);