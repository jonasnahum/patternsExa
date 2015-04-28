var EventEmitter = require("events").EventEmitter;
var util = require("util");


var Semaforo = (function () {
    function Semaforo() {
        this.posiblesEstados = ["verde","amarillo","rojo"];
        this.actual = 0;
    }
    util.inherits(Semaforo, EventEmitter);//Semaforo hereda de EventEmitter.
    
    Semaforo.prototype.cambiarEstado = function () {
        this.emit("antesDeCambiar", this.posiblesEstados[this.actual]);
        
        if(this.actual ===2)
            this.actual = 0 ;
        else
            this.actual++;
        this.emit("despuesDeCambiar", this.posiblesEstados[this.actual]);
    };
return Semaforo;
})();

module.exports = function (){
    return new Semaforo ();
}; 
