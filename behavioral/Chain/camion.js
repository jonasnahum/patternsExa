var Camion = (function () {
    function Camion() {
    }
     
    Camion.prototype.calcularTarifaMinima = function(dineroQueTraeElPasajero) {
        var tarifa = 7;
        return dineroQueTraeElPasajero > tarifa;
    }
    Camion.prototype.transportar = function() {
        var mensaje = "Al pasajero le alcanzó para viajar en en camion";
        return mensaje;
    }
    return Camion;
    
})();

module.exports = function (){
    return new Camion ();
}; 
