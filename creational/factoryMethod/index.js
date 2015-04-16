//mandar llamar variableFactory con ().
var clienteFactory = require ("./cliente.js");

var cliente = clienteFactory();
cliente.build({auto:"tsuru", mensaje: "Se llenó el tsuru con 40 litros"});
cliente.build({auto:"silverado", mensaje: "Se llenó la silverado con 60 litros"});
cliente.build({auto:"hummer", mensaje: "Se llenó la hummer con 80 litros"});
