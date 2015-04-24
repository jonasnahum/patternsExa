var chainFactory = require ("./chain");
var chain = chainFactory();

var result = chain.buscadorDeTransporte(35);

console.log(result);