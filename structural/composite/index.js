var boletaFactory = require ("./boleta");
var calificableFactory = require ("./gradoEscolar");
var semestreFactory = require ("./semestre.js");

var boleta = boletaFactory();
var semestre1 = semestreFactory({calificacion: 8},{calificacion: 8},{calificacion: 8},"SEMESTRE1");
var semestre2 = semestreFactory({calificacion: 7},{calificacion: 7},{calificacion: 7},"SEMESTRE2");
var calificable = calificableFactory(semestre1, semestre2, "AÑO 2015");

var resultado = boleta.imprimir(calificable);
console.log(resultado);
    
