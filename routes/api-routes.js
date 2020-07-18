var db = require("../models");
var passport = require("../config/passport");
module.exports = function(app) {

  app.get("/api/customers/", function(req, res) {
     db.Customers.findOne({
       where: {
        email: req.params.email,
        first: req.params.first,
        last: req.params.last,
        phonenumber: req.params.phonenumber,
      }
    }).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  
  });

  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};