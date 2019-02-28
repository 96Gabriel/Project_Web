var express = require("express");
var consolidate =  require("consolidate");

var app = express();

var errMsg = "";
var name = "";

app.engine('html', consolidate.hogan);
app.set("views", "static");

app.get("/", function(req, res){
    name = req.query.username;
    var password = req.query.password;
    var description = req.query.description;
    var address = req.query.address;

    if(password != undefined && password != "123pass"){
        errMsg = "The password is incorrect";
        res.redirect("/authentication");
    }

    res.render("main.html", {username: name, description: description, address: address});
});

app.get("/incident", function(req, res){
    name = req.query.username;
    if(name != undefined){
        res.render("incident.html", {username: name});
    }else{
        res.redirect("/authentication");
    }
});

app.get("/authentication", function(req, res){
    res.render("authentication.html", {errMsg: errMsg});
});


app.use(express.static('main'));
app.listen(8080);