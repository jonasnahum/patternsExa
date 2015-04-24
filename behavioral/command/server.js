var express = require("express");
var server = express();

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/", function(req, res) {
    res.end('hola');
});

server.post("/realizaroperacion", function(req, res){
    req.accepts('application/json');    
    var calculadoraFactory = require("./calculadora");
    var calculadora = calculadoraFactory();    
    console.log('get comando');
    console.log(req.body);
    var comando = req.body;
    console.dir(comando);
    console.log('get method');
    var metodo = calculadora[comando.nombre];
    console.dir(metodo);
    console.log('get result');
    var resultado = metodo.apply(calculadora, comando.parametros);
    console.dir(resultado);
    
    res.end(resultado.toString());
});

var port = process.env.PORT || 3000;
server.listen(port, function(){
    console.log("server: http://localhost:3000/realizaroperacion");
});
              