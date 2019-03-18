var express = require("express"),
    consolidate = require("consolidate"),
    MongoClient = require("mongodb").MongoClient,
    bodyParser = require("body-parser");

var app = express();

var database;

app.engine('html', consolidate.hogan);
app.set("views", "static");
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect("mongodb://localhost:27018/", { useNewUrlParser: true }, (err, db) => {
    dbo = db.db("incidents_db");
    if(err) throw err;
    database = dbo;
});

app.get("/", function (req, res) {
    database.collection("incidents").find().toArray((err, doc) => {
        if (err) throw err;
        var list = {};
        list.incidents = doc;
        res.render("main.html", list);
    }); 
});

app.get("/incident", function (req, res) {
    res.render("incident.html");
});

app.get("/authentication", function (req, res) {
    res.render("authentication.html");
});

app.post("/incident", function(req, res){
    var address = req.body.address;
    var description = req.body.description;
    var new_incident = {"description": description, "address": address, "author": "", "date": 18/03/2019};
    database.collection("incidents").insertOne(new_incident, function(err, doc){
        if(err) throw err;
        res.redirect("/");       
    });
});

app.use(express.static('main'));
app.listen(8080);

