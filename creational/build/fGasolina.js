var Fgasolina = (function () {
    function Fgasolina (precioEnviado) {
        this.precio = precioEnviado;
    }
    return Fgasolina;
})();

module.exports = function (precio){
    return new Fgasolina (precio);
}; 