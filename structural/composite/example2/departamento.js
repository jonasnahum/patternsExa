var Departamento = (function () {
    function Departamento(cantidad, precio) {
        this.cantidad = cantidad;
        this.precio = precio;
    }
    Departamento.prototype.getTotal = function () {
        return this.cantidad * this.precio;
    };
    return Departamento;
})();

module.exports = function (cantidad, precio){
    return new Departamento (cantidad, precio);
}; 