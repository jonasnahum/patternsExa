var jamonFactory = require("./jamon");
var jamon = jamonFactory();

var polloFactory = require("./pollo");
var pollo = polloFactory();

var result1 = jamon.preparar();
var result2 = pollo.preparar();
