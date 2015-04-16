var Whats = (function () {
    function Whats() {}
        Whats.prototype.enviarTexto = function (mensaje) {
            console.log(mensaje);
        };

    return Whats;
})();

module.exports = function (){
    return new Whats ();
}; 