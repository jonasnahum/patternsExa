var libretaFactory = require("./libreta");

var Secretaria = (function () {
    function Secretaria() {
        this.apuntes;//same state as a memento.
    }
    Secretaria.prototype.saveMemento = function () {
        return libretaFactory(this.apuntes);//regresa objeto con apuntes para archivo.
    };
    Secretaria.prototype.restoreMemento = function (memento){
        return this.apuntes = memento;
        };
    return Secretaria;
})();

module.exports = function (){
    return new Secretaria ();
}; 
