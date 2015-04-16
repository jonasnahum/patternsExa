var Faceite = (function () {
    function Faceite (precioEnviado) {
        this.precio = precioEnviado;
    }
    return Faceite;
})();

module.exports = function (precio){
    return new Faceite (precio);
}; 