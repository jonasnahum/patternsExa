var ciudadanoFactory = require("./ciudadano");
var paritidoPoliticoFactory = require("./partidoPolitico");
var ineFactory = require("./ineMediador");

var partidosPoliticos = new Array();
var ciudadanos = [];

var pan = paritidoPoliticoFactory("pan");
var pri = paritidoPoliticoFactory("pri");
var prd = paritidoPoliticoFactory("prd");
partidosPoliticos.push(pan);
partidosPoliticos.push(pri);
partidosPoliticos.push(prd);

ciudadanos.push(ciudadanoFactory("pan"));
ciudadanos.push(ciudadanoFactory("pan"));
ciudadanos.push(ciudadanoFactory("pan"));
ciudadanos.push(ciudadanoFactory("pri"));
ciudadanos.push(ciudadanoFactory("pri"));
ciudadanos.push(ciudadanoFactory("prd"));

var ine = ineFactory(partidosPoliticos, ciudadanos);
ine.organizarElecciones();
var ganador = ine.presentarResultados();
console.log("el ganador es.." + ganador.nombre);
