const mongoose = require('mongoose');
//i dont even know why
const deepPopulate = require('mongoose-deep-populate')(mongoose);
//model to request moeny from another user

const requestSchema = new mongoose.Schema({
  message:  { type: String },
  status:   { type: String, default: 'pending' },
  date:     { type: Date, default: Date.now },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account'
  },
  //needs a better name
  guest:     {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

requestSchema.plugin(deepPopulate, {});


module.exports = mongoose.model("request", requestSchema);