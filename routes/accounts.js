var express = require('express');
var router = express.Router();
var Account = require('../models/Account');


//GET /properties
router.get('/accounts', function (req, res) {
  Account.find().then(function (accounts) {
    res.send({ accounts });
  });
});

// GET /properties/new
router.get('/accounts/new',function (req, res) {
  Account.find().then(function (accounts) {
    res.send({accounts});
  });
});

//POST /accounts
router.post('/account', function (req, res) {
    var amount = req.body.amount;
    var name = req.body.name;
    var username = req.body.username;
    var password = req.body.username;
    var countryCode = req.body.countryCode;
    var phoneNumber = req.body.phoneNumber;
    var ETH = req.body.ETH;
    var user = req.user;
  
    var account = new Account({ amount: amount, ETH: ETH, owner: user.id });
    account.save()
    .then(function (savedAccount) {
      res.send({ account });
    });
  });

//GET /properties/1
router.get('/accounts/:id', function (req, res) {
  var accountId = req.params.id;
  Account.findOne({ _id: accountId }).then(function (account) {
    res.send({ account });
  });
});


// // GET /properties/1/edit
// router.get('/account/:id/edit', middleware.isAuthenticated, function (req, res) {
//   var propertyId = req.params.id;
//   Property.findOne({ _id: propertyId }).then(function (property) {
//     res.render('properties/edit', { property: property });
//   });
// });

// // POST /properties/update
// router.post('/update', middleware.isAuthenticated, function (req, res) {
//   var propertyId = req.body.propertyId;

//   Property.findOne({ _id: propertyId })
//   .then(function (property) {
//     property.description = req.body.description;
//     property.imageUrl = req.body.imageUrl;

//     return property.save();
//   })
//   .then(function (updatedProperty) {
//     return res.redirect('/properties/' + updatedProperty.id);
//   });
// });

module.exports = router;