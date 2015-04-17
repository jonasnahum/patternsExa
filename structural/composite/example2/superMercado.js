var Smercado = (function () {
    function Smercado() {
        this.departamentos = new Array();
    }
    Smercado.prototype.agregarDepartamento = function (departamento) {
        this.departamentos.push(departamento);
    };
    Smercado.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i<this.departamentos.length; i++) {
            total += this.departamentos[i].getTotal();
        }
        return total;
    };

    
return Smercado;
})();


module.exports = function (){
    return new Smercado ();
}; 