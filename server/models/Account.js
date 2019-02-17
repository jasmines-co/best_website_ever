const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
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