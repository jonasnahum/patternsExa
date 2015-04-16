var Adapter = (function () {
    function Adapter(celular) {
        this.celular = celular;
    }
        Adapter.prototype.enviar = function (mensaje) {
            this.celular.enviarSms(mensaje);
        };

    return Adapter;
})();

module.exports = function (celular){
    return new Adapter (celular);
}; 
