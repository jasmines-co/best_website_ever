const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  address: { type: String, required: true },
  amount:    { type: String, required: true },
  date:        { type: Date, default: Date.now },
  owner:       {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model("wallet", walletSchema);