var cuadFactory = require ("./cuadrado");
var circFactory = require ("./circulo");
var adapFactory = require ("./celMedioAdapter");

var circulo = circFactory();
var adapter = adapFactory(circulo);
var cuadrado = cuadFactory();

var mensaje = "hola";

cuadrado.notificar(adapter, mensaje);