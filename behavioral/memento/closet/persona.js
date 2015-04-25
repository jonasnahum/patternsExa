var Persona = (function () {
    function Persona(bdd) {
        this.bdd = bdd;
    }
    
    Persona.prototype.vestirme = function (dia, vestimenta ){
        return this.bdd.guardarVestimenta(dia, vestimenta);
    };

    Persona.prototype.verQueTraiaPuesto = function (dia){
        return this.bdd.verVestimenta(dia);
    };
    return Persona;
})();

module.exports = function (bdd){
    return new Persona (bdd);
}; 

