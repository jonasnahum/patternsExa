var proxyFactory = require("./proxy.js");
var proxy = proxyFactory(3, 4, 5);

var area = proxy.calcularArea();
var peri = proxy.calcularPerimetro();
var base = proxy.base;
var altura = proxy.altura;

console.log("el area del triangulo es  " + area);
console.log("el perimetro del triangulo es  " + peri);
console.log("la base del triangulo es  " + base);
console.log("la altura del triangulo es  " + altura);