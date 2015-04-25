var secretariaFactory = require("./secretaria");

var Jefe = (function () {
    function Jefe() {
        this.archivoDeApuntes = [];
        this.secretaria = secretariaFactory();
    }
    Jefe.prototype.escribir = function(apuntes) {
        return this.secretaria.apuntes = apuntes;
    };
    Jefe.prototype.cambiarApuntes = function (apuntesNuevos){
        this.archivoDeApuntes.push(this.secretaria.saveMemento());//(actuallibreta con     apuntes)
        return this.secretaria.apuntes = apuntesNuevos;
    };

    Jefe.prototype.volverUltimoApunte = function () {//undo
        //retorna una secretaria con el apunte anterior.
        return this.secretaria.restoreMemento(this.archivoDeApuntes.pop());//
    };
    
    return Jefe;
})();

module.exports = function (){
    return new Jefe ();
}; 
