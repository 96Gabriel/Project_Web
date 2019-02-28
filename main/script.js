var d = new Date();
var day =d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

var date = day + "/" + month + "/" + year;

$(".date").text(date);

var username = $(".lis4").text();

if(username === ""){
    $("#incident_link").attr("href", "/incident");
}else{
    $("#incident_link").attr("href", "/incident?username=" + username);
}
