var puriFactory = require("./purificadora");
var Adapter = (function () {
    function Adapter() {
        this.puri = puriFactory();
    }
    Adapter.prototype.recibirGarrafon = function (mensaje) {
        this.puri.verificarGarrafon(mensaje.mensaje);
        this.puri.lavarGarrafon();
    };
    Adapter.prototype.llenarGarrafon = function () {
        this.puri.encenderOzono();
        this.puri.abrirLLave();
    };
    Adapter.prototype.cobrar = function () {
        this.puri.registrarVenta();
        this.puri.darCambio();
    };
 
    return Adapter;

})();

module.exports = function (){
    return new Adapter();
}; 

