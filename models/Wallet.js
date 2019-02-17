const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  address: { type: String },
  amount:    { type: String },
  date:        { type: Date, default: Date.now },
  owner:       {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model("wallet", walletSchema);