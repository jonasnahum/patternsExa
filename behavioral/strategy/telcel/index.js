var minFactory = require("./min");
var normalFactory = require("./normal");
var telcelFactory = require("./telcel");
var clienteFactory = require("./cliente");

var telcel = telcelFactory(minFactory(), normalFactory());
var cliente = clienteFactory(201, 1);
var texto = telcel.facturar(cliente);
console.log(texto);

var cliente2 = clienteFactory(100, 1);
var texto2 = telcel.facturar(cliente2);
console.log(texto2);
