var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

var date = day + "/" + month + "/" + year;
$("#date").text(date);