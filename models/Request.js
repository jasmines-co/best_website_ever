const mongoose = require('mongoose');
//i dont even know why
const deepPopulate = require('mongoose-deep-populate')(mongoose);
//model to request moeny from another user

const requestSchema = new mongoose.Schema({
  message:  { type: String, required: true },
  status:   { type: String, default: 'pending' },
  date:     { type: Date, default: Date.now },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'wallet'
  },
  //needs a better name
  holder:     {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

requestSchema.plugin(deepPopulate, {});


module.exports = mongoose.model("request", requestSchema);