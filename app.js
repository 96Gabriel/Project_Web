var express = require("express");
var consolidate =  require("consolidate");

var app = express();

var errMsg = "";

app.engine('html', consolidate.hogan);
app.set("views", "static");

app.get("/", function(req, res){
    var name = req.query.username;
    var password = req.query.password;

    if(password != undefined && password != "123pass"){
        errMsg = "The password is incorrect";
        res.redirect("/authentication");
    }

    res.render("main.html", {username: name});
});

app.get("/incident", function(req, res){
    res.render("incident.html");
});

app.get("/authentication", function(req, res){
    res.render("authentication.html", {errMsg: errMsg});
});


app.use(express.static('main'));
app.listen(8080);