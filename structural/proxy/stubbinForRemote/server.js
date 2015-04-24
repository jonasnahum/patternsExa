var express = require("express");
var app = express();

/* obtener fecha */
app.get("/obtenerFecha", function(req, res) {
    var now = new Date();
    var date = now.getDay()+ "/" + now.getMonth() + "/" + now.getFullYear();
    res.send(date);
});

/* obtener hora */
app.get("/obtenerHora", function(req, res) {
    var now = new Date;
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    res.send(time);
});

var port = process.env.PORT || 8080;//cualquier numero de cuatro digitos.
var host = 'http://localhost:' + port;

app.listen(port, function() {
    console.log("Listening on " + host);
});