var proxyFactory = require("./proxy");
var comandoFactory = require("./comando");

var sumar = comandoFactory("sumar", [3,4]);
var proxy = proxyFactory();
proxy.realizarOperacion(sumar);
