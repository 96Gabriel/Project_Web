var express = require("express");
var consolidate =  require("consolidate");

var app = express();

app.engine('html', consolidate.hogan);
app.set("views", "static");

app.get("/", function(req, res){
    res.render("main.html");
});

app.get("/incident", function(req, res){
    res.render("incident.html");
});

app.get("/authentication", function(req, res){
    res.render("authentication.html");
});

app.use(express.static('main'));
app.listen(8080);