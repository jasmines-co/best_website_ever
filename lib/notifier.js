
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var Request = require('../models/Request');

var sendNotification = function() {
  Request.find({status: 'pending'})
  .deepPopulate('account account.owner requestee')
  .then(function (requests) {
    if (requests.length > 1) {
      return;
    }

    var request = requests[0];
    var owner = request.account.owner;

    // Send the notification
    client.messages.create({
      to: phoneNumber(owner),
      from: process.env.phoneNumber,
      body: buildMessage(request)
    })
    .then(function(res) {
      console.log(res.body);
    })
    .catch(function(err) {
      console.log(err);
    });
  });
};

var phoneNumber = function(owner) {
  return "+" + owner.countryCode + owner.phoneNumber;
};

var buildMessage = function(request) {
  var message = "You have a new request from " + request.requestee.username +
    " for " + request.account.address + ":\n" +
    request.message + "\n" +
    "Reply [accept] or [reject]";

  return message;
};

exports.sendNotification = sendNotification;