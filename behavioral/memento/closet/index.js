var personaFactory = require("./persona");
var bddFactory = require("./bdd");
var vestimentaFactory = require("./vestimenta");

var yo = personaFactory(bddFactory());

var lunes = 0,
    martes =1,
    miercoles =2,
    jueves=3,
    viernes=4;

yo.vestirme(lunes,vestimentaFactory("blanca", "negro"));
yo.vestirme(martes,vestimentaFactory("blanca", "rojo"));
yo.vestirme(miercoles,vestimentaFactory("blanca", "termico"));
yo.vestirme(jueves,vestimentaFactory("blanca", "nike"));
yo.vestirme(viernes, yo.verQueTraiaPuesto(lunes));

var resultado = yo.verQueTraiaPuesto(viernes);
console.log(resultado);

//las propiedades determinan el estado de un objeto.