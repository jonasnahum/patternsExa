var Boleta = (function () {
    function Boleta() {};
    Boleta.prototype.imprimir = function (calificable){
        //IMPRIMIR EL TITULO DEL CALIFICABLE.
        return calificable.obtenerPromedio();
    };
    return Boleta;
})();

module.exports = function (){
    return new Boleta ();
}; 