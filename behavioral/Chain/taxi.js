var Taxi = (function () {
    function Taxi() {
    }
     
    Taxi.prototype.calcularTarifaMinima = function(dineroQueTraeElPasajero) {
        var tarifa = 30;
        return dineroQueTraeElPasajero > tarifa;
    }
    Taxi.prototype.transportar = function() {
        var mensaje = "Al pasajero le alcanzó para viajar en taxi.";
        return mensaje;
    }
    return Taxi;
    
})();

module.exports = function (){
    return new Taxi ();
}; 

