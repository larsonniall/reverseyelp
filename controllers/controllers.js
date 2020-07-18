var express = require("express");
var router = express.Router();
var customers = require("../models/index.js");
var customers = require("../models/customers.js")


router.get("/", function(req, res) {
    customers.selectAll((data)=>{
        let customers = data.map(({customerName, phoneNumber, reviews, thumbsUpDown}) => ({
            customerName: customerName,
            phoneNumber: phoneNumber,
            reviews: reviews,
            thumbsUpDown: thumbsUpDown
        }));
        let customersObj = {customers: customers};
        console.log(customersObj);
        res.render(index, customersObj);
    });
});

router.post("/api/new", (req, res) => {
    customers.createOne(["customerName", "reviews"],[req.body.customerName, req.body.reviews], (
        res.json({id: result.insertId})
    ))
});

router.put("/api/new/:id", (req, res) =>{
    let customerId = req.params.id;
    customers.updateOne(customerId, (result) =>{
        if (result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports= router;