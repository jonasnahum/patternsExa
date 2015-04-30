var sedanFactory = require("./sedan");
var camionetaFactory = require("./camioneta");
var motoFactory = require("./moto");
var datosFactory = require("./datos");




var pasajeros = 10;
var sortearEstrategia = function (pasajeros){

    var strat;
    if (pasajeros > 5)
        return strat = camionetaFactory();
    else if (pasajeros > 2)
        return strat = sedanFactory();
    else
        return strat = motoFactory();
};
var estrategia = sortearEstrategia(pasajeros);

var result = estrategia.rentar(datosFactory(9, 2.1, pasajeros));

console.log("ud. ha rentado un carro con una eficiencia de "+result.kmPorLitro + " lts/km"); 
console.log("con una potencia de " + result.potencia + " caballos");
console.log("y con capacidad para " + result.pasajeros + " personas"); 

