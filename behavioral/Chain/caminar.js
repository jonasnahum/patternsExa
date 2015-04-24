var Caminar = (function () {
    function Caminar() {
    }
     
    Caminar.prototype.calcularTarifaMinima = function() {
        return true;
    }
    Caminar.prototype.transportar = function() {
        var mensaje = "Siempre se puede caminar.";
        return mensaje;
    }
    return Caminar;
    
})();

module.exports = function (){
    return new Caminar ();
}; 

