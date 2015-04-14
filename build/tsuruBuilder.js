
//regressar la instancia la final del modulo, de este modulo.
var afinacionFactory = require ("./afinacion.js");
var bujiaFactory = require ("./bujias.js");
var aceiteFactory = require ("./fAceite.js");
var aireFactory = require ("./fAire.js");
var gasolinaFactory = require ("./fGasolina.js");

var afinacionBuilder = (function () {//clases concretas. implementan la interfase.
    function afinacionBuilder(precios) {
        this.precios = precios;
    }
    afinacionBuilder.prototype.build = function () {//metodo.
        var afinacion = afinacionFactory ();
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.fAceite.push(aceiteFactory(this.precios.aceite));
        afinacion.fAire.push(aireFactory(this.precios.aire));
        afinacion.fGasolina.push(gasolinaFactory(this.precios.gasolina));
        return afinacion;
    };
    return afinacionBuilder;
})();

module.exports = function (precios){
    return new  afinacionBuilder (precios);
}; 