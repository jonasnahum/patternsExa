var clienteFactory = require ("./cliente.js");

var cliente = clienteFactory();

var areaTriangulo = cliente.build({figura:"triangulo", b:3, a:3});
var areaCuadrado = cliente.build({figura:"cuadrado", b:3, a:3});
var areaCirculo = cliente.build({figura:"circulo", pi:3.1416, r:3});

console.log (areaTriangulo);
console.log (areaCuadrado);
console.log (areaCirculo);

