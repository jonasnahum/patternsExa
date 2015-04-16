var Faire = (function () {
    function Faire (precioEnviado) {
        this.precio = precioEnviado;
    }
    return Faire;
})();

module.exports = function (precio){
    return new Faire (precio);
}; 