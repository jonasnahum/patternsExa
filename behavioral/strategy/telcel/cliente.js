var Cliente = (function () {
    function Cliente(saldo, minutos){
        this.saldo = saldo;
        this.minutos = minutos;
    }
    return Cliente;
})();

module.exports = function (saldo, minutos){
    return new Cliente (saldo, minutos);
}; 
