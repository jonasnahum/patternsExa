var Celular = (function () {
    function Celular() {}
        Celular.prototype.enviarSms = function (mensaje) {
            console.log(mensaje);
        };

    return Celular;
})();

module.exports = function (){
    return new Celular ();
}; 
