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
        var paso3 = this.puri.encenderOzono();
        var paso4 = this.puri.abrirLLave();
        return {paso3:paso3, paso4:paso4};
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

