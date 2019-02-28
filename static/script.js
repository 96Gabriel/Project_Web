var d = new Date();
var day =("0" + Date.getDate()).slice(-2);
var month = ("0" + Date.getMonth() + 1);
var year = Date.getFullYear();

var date = year + "/" + month + "/" + day;

$("#date").text(date);