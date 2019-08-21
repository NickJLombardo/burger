var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js")

router.get("/", function(req,res){
    burger.all(function(data){
        const object = {
            burgers:data
        };
        console.log(object);
        res.render("index", object)
    });
});

module.exports = router;