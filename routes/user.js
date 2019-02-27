
const express = require('express');

const User = require('../models/User');

const router = express.Router();

// GET: /users/new
// router.get('/new', function(req, res) {
//   res.render('users/new');
// });

// POST: /users
router.post('/users', function(req, res) {
    const user = new User(req.body);
    user.save().then(user => {
        res.send({ user });
    });
});
//   User.register(new User({
//     email:       req.body.email,
//     username:    req.body.username,
//     countryCode: req.body.countryCode,
//     phoneNumber: req.body.phoneNumber,
//     ETH:  req.body.ETH
//   }), req.body.password, function(err, user) {
//     if (err) {
//       console.log(err);
//       return res.send(user);
//     }
//   });
// });

module.exports = router;