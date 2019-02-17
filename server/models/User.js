const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  email:       { type: String, required: true },
  username:    { type: String, required: true },
  password:    { type: String },
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  date:        { type: Date, default: Date.now },
  ETH: {type: String, required: false, max: 64},
});



module.exports = mongoose.model("user", userSchema);