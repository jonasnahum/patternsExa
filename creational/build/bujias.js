var Bujia = (function () {
    function Bujia (precioEnviado) {
        this.precio = precioEnviado;
    }
    return Bujia;
})();

module.exports = function (precio){
    return new Bujia (precio);
}; 