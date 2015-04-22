var Imc = (function () {
    function Imc() {
    }
     
    Imc.prototype.calcular = function(datosPersona) {
        return datosPersona.peso/(datosPersona.altura * datosPersona.altura);
    }
    return Imc;
    
})();

module.exports = function (){
    return new Imc ();
}; 


