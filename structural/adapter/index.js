var adapterFactory = require ("./adapter");

var adapter = adapterFactory();
adapter.recibirGarrafon({mensaje: "se realizo verificacion de GARRAFON"});

var mensajes = adapter.llenarGarrafon();
console.log(mensajes.paso3);
console.log(mensajes.paso4);


adapter.cobrar();