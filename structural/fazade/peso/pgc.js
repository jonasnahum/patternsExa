var Pgc = (function () {
    function Pgc() {
    }
     
    Pgc.prototype.calcular = function(persona, imc) {
        return (1.20*imc)+(0.23 * persona.edad)-(10.8*persona.sexo)-5.4
    }
    return Pgc;
    
})();

module.exports = function (){
    return new Pgc ();
}; 


