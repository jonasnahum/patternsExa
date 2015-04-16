var Notificador = (function () {
    function Notificador() {}
        Notificador.prototype.notificar = function (medio, mensaje) {
            medio.enviar(mensaje);
        };

    return Notificador;
})();

module.exports = function (){
    return new Notificador ();
}; 
