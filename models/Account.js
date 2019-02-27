const mongoose = require('mongoose');
//property
const accountSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  countryCode:String,
  phoneNumber: String,
  address: { type: String },
  amount:    { type: String },
  date:        { type: Date, default: Date.now },
  ETH: {type: String, required: false, max: 64},
  owner:       {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model("account", accountSchema);