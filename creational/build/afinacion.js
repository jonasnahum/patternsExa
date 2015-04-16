
//clase intermedia que tiene los productos.
var Afinacion = (function () {
    function Afinacion() {
        this.bujias = [];
        this.fAceite = [];
        this.fAire = [];
        this.fGasolina = [];
    }
    Afinacion.prototype.obtenerPresupuesto = function (){
        var total = 0;
        
        this.bujias.forEach(function(bujia){
            total += bujia.precio;
        });       
        
        this.fAceite.forEach(function(aceite){
            total += aceite.precio;
        });
        this.fAire.forEach(function(aire){
            total += aire.precio;
        });
        this.fGasolina.forEach(function(gasolina){
            total += gasolina.precio;
        });
        
        return total;        
    };
    return Afinacion;
})();

module.exports = function (){
    return new Afinacion ();
}; 

