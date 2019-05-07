var express = require("express");
var app = express();
var fs = require("fs");

app.get("/", function(req, res) {
  fs.readFile("./database/inventory.json", "utf8", function(err, data) {
    console.log(data);
    res.send(data);
  });
});

app.get("/:id", function(req, res) {
  fs.readFile("./database/inventory.json", "utf8", function(err, data) {
    var inventory = JSON.parse(data);
    var product = inventory["product" + req.params.id];
    console.log(product);
    res.send(JSON.stringify(product));
  });
});

var server = app.listen(8088, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("This app is listening at port" + port);
});
