var Tsuru = (function () {
    function Tsuru (mensaje) {
        this.mensaje = mensaje;
    }
    Tsuru.prototype.llenarTanque = function(){
        console.log(this.mensaje);
    };
    return Tsuru;
})();

module.exports = function (mensaje){
    return new Tsuru (mensaje);
}; 