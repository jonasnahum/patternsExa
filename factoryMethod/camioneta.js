var Camioneta = (function () {
    function Camioneta (mensaje) {
        this.mensaje = mensaje;
    }
    Camioneta.prototype.llenarTanque = function (){
        console.log(this.mensaje);
    };
    return Camioneta;
})();

module.exports = function (mensaje){
    return new Camioneta (mensaje);
}; 