var MessagingResponse = require('twilio').twiml.MessagingResponse;
var twilio = require('twilio');
const express = require("express");

const router = express.Router();

const Account = require('../models/Account');
var Request = require('../models/Request');
var User = require('../models/User');
var notifier = require('../lib/notifier');


router.post('/request', function (req, res) {
  var requestId = req.body.requestId;
  var user = req.user;

  Account.findOne({ _id: accountId })
  .then(function (account) {
    var request = new Request({
      message: req.body.message,
      account: propertyId,
      requestee: user.id
    });

    return request.save();
  })
  .then(function () {
    notifier.sendNotification();
    res.send({ request });
  })
  .catch(function(err) {
    console.log(err);
  });
});

// POST: /reservations/handle
router.post('/request/handle', twilio.webhook({validate: false}), function (req, res) {
  var from = req.body.From;
  var smsRequest = req.body.Body;

  var smsResponse;

  User.findOne({phoneNumber: from})
  //the fuck???
  .then(function (host) {
    return Request.findOne({status: 'pending'});
  })
  .then(function (request) {
    if (request === null) {
      throw 'No pending reservations';
    }
    request.status = smsRequest.toLowerCase() === "accept" ? "confirmed" : "rejected";
    return request.save();
  })
  .then(function (request) {
    var message = "You have successfully " + request.status + " the request";
    respond(res, message);
  })
  .catch(function (err) {
    var message = "Sorry, it looks like you do not have any reservations to respond to";
    respond(res, message);
  });
});

var respond = function(res, message) {
  var messagingResponse = new MessagingResponse();
  messagingResponse.message({}, message);

  res.type('text/xml');
  res.send(messagingResponse.toString());
}




// module.exports = router;