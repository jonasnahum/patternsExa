var adapterFactory = require ("./adapter");

var adapter = adapterFactory();
adapter.recibirGarrafon({mensaje: "se realizo verificacion de GARRAFON"});

var mensajes = adapter.llenarGarrafon();
console.dir(mensajes);

adapter.cobrar();