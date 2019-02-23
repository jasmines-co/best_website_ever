

// controllers/restaurants.js
const express = require("express");

const router = express.Router();

const Request = require("../models/Request");



// //ROOT ROUTE - INDEX
router.get("/accounts", (req, res) => {
  Account.find()
    // Provide a function for the Promise to call when it resolves- when it finished whatever it was doing.
    .then(accounts => {
      res.send({ accounts });
    })
    // Provide a function for the promise to call if it is rejected. A Promise is rejected if it fails.
    .catch(err => {
      console.log(err);
    });
});

// //NEW
// router.get("/accounts/new", (req, res) => {
//   res.render("restaurants/new.hbs");
// });

//CREATE
router.post("/accounts", (req, res) => {
  Account.create(req.body)
    .then(account => {
      res.redirect(`/accounts/${account._id}`); // Redirect to reviews/:id
    })
    .catch(err => {
      console.log(err.message);
    });
});

// SHOW
router.get("/accounts/:id", (req, res) => {
  Account.findById(req.params.id)
    .then(account => {
      res.send({ account });
    })
    .catch(err => {
      console.log(err.message);
    });
});

// EDIT
// router.get("/restaurants/:id/edit", (req, res) => {
//     Restaurant.findById(req.params.id, function(err, restaurant) {
//     res.render("restaurants/edit.hbs", { restaurant });
//   });
// });
// //
// //UPDATE
// router.put("/restaurants/:id", (req, res) => {
//     if (currentUser === null) {
//         res.redirect("/user/login");
//     }
//   Restaurant.findByIdAndUpdate(req.params.id, req.body)
//     .then(restaurant => {
//       res.redirect(`/restaurants/${restaurant._id}`); // Redirect to restaurants/:id
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });

// // DELETE
// router.delete("/restaurants/:id", function(req, res) {
//     if (currentUser === null) {
//         res.redirect("/user/login");
//     } 
//   Restaurant.findByIdAndRemove(req.params.id)
//     .then(restaurant => {
//       res.redirect("/restaurants");
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });



module.exports = router;