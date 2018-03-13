const express = require("express");
const bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {Users} = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", function(req, res) {
    var todo = new Todo({
        text: req.body.text,
    });
    
    todo.save().then(function(doc) {
       res.send(doc); 
    }).catch(function(err) {
        res.status(400).send(err);
    })
});

app.listen(3000, function() {
    console.log("Started on Port 3000");
});

module.exports = {app};



