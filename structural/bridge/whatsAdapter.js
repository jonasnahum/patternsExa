var Adapter = (function () {
    function Adapter(app) {
        this.app = app;
    }
        Adapter.prototype.enviar = function (mensaje) {
            this.app.enviarTexto(mensaje);
        };

    return Adapter;
})();

module.exports = function (app){
    return new Adapter (app);
}; 
