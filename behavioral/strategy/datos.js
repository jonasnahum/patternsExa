var Datos = (function () {
    function Datos(kmPorLitro, potencia, pasajeros){
        this.kmPorLitro = kmPorLitro;
        this.potencia = potencia;
        this.pasajeros = pasajeros;
    }
    return Datos;
})();

module.exports = function (kmPorLitro, potencia, pasajeros){
    return new Datos (kmPorLitro, potencia, pasajeros);
}; 
