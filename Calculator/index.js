const express = require('express');
var bodyParser = require('body-parser')
const App = express();

App.use(bodyParser.urlencoded({ extended: false }));


App.listen(3000, function() {
  console.log("This Server runs Port Number 3000");
});

App.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");pass  
});


App.post("/", function(req, res) {
  var t1 = Number(req.body.n1);
  var t2 = Number(req.body.n2);
  var results = t1 + t2;
  res.send("The Results of Calculation is : " + results);
});