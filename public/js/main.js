'use strict';
//nQuery, *the* JS Framework
var $ = function (foo) {
    return document.getElementById(foo);
}

$("send").addEventListener("click", function(e){
    var name = $("name").value;
    var mail = $("mail").value;
    var message = $("message").value;

    $("receipt").innerHTML += "Your name: " + name +"<br>"+ "your email: " + mail+ "<br>" +"Your message: " + message;
});