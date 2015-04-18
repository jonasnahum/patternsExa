var papasFactory = require("./papas");
var refrescoFactory = require("./refresco");
var HamburguesaFactory = require("./hamburguesa");
var CBFactory = require("./comboBase");
var CDFactory = require("./comboDecorado");

var papas = papasFactory(100);
var refresco = refrescoFactory(250);
var hamburguesa = HamburguesaFactory(1);

var comboBase = CBFactory(hamburguesa, refresco, papas);
var comboDecorado = CDFactory(comboBase);
var objDecorado = comboDecorado.getCombo();

console.log(objDecorado.hamburguesa);
console.log(objDecorado.refresco);
console.log(objDecorado.papas);


