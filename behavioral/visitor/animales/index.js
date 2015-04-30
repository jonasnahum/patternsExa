var gallinaFactory = require("./gallina");
var changoFactory = require("./chango");
var palomaFactory = require("./paloma");
var visitorFactory = require("./visitor");

var animales = [];
animales.push(gallinaFactory());
animales.push(palomaFactory());
animales.push(changoFactory());

var visitor = visitorFactory();

for (var i = 0; i < animales.length; i++) {
    animales[i].visit(visitor);
}