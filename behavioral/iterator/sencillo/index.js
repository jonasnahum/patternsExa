var iteradorFactory = require("./iterador.js");
var array = ["uno","dos","tres"];
var iterador = iteradorFactory(array);

var result1 = iterador.next();
console.log(result1);

var result2 = iterador.next();
console.log(result2);

var result3 = iterador.next();
console.log(result3);

