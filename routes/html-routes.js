var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        if (req.user) {
            res.render("index");
        }
        res.render("index");
    });

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    app.get("/login", function (req, res){
        res.render("login");
    });

    app.get("/customers", function (req, res) {
        if (req.user) {
            res.render("customers");
        }
        res.render("customers");
    });

};
