var express = require("express");
var app = express();
var fs = require("fs");

app.get("/inventory", function(req, res) {
  fs.readFile("./database/inventory.json", "utf8", function(err, data) {
    console.log(data);
    res.send(data);
  });
});

app.get("/inventory/:id", function(req, res) {
  fs.readFile("./database/inventory.json", "utf8", function(err, data) {
    var inventory = JSON.parse(data);
    var product = inventory["product" + req.params.id];
    console.log(product);
    res.send(JSON.stringify(product));
  });
});

var server = app.listen(8088, function() {
  console.log("Listening at port " + server.address().port);
});
