var personaFactory = require ("./datosPersonales");
var imcFactory = require ("./imc");
var pgcFactory = require ("./pgc");
var tablaFactory = require ("./tabla");
var TablaPgcFactory = require ("./tablaPgc");

datosPersona = personaFactory("monse", 1.82, 95, 29, 1);
imc = imcFactory();
pgc = pgcFactory();
edoNutricional = tablaFactory();
clasificacionPgc = TablaPgcFactory();


var emitirDiagnóstico = function (){
    var indiceMasa = imc.calcular(datosPersona);
        console.log("imc = " + indiceMasa); 
    
    var resultadoTabla = edoNutricional.ubicar(indiceMasa);
        console.log ("según este imc  "+resultadoTabla);

    var resultadoPgc = pgc.calcular(datosPersona, indiceMasa);
        console.log("porcentaje de grasa corporal = " + resultadoPgc);
    
    var resultadoPgc = clasificacionPgc.ubicar(resultadoPgc);
        console.log(resultadoPgc);
};
emitirDiagnóstico();


    