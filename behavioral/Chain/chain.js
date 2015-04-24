var taxiFactory = require("./taxi");
var camionFactory = require("./camion");
var caminarFactory = require("./caminar");

var taxi = taxiFactory();
var camion = camionFactory();
var caminar = caminarFactory();

var Chain = (function () {
    function Chain() {
        this.transportePublico = new Array();
        this.transportePublico.push(taxi);
        this.transportePublico.push(camion);
        this.transportePublico.push(caminar);
    }
     
    Chain.prototype.buscadorDeTransporte = function(dinero) {
        for (var i = 0; i < this.transportePublico.length; i++) {
            if (this.transportePublico[i].calcularTarifaMinima(dinero)) {
                return this.transportePublico[i].transportar(dinero);
            }
        }
    };
    
    return Chain;
    
})();

module.exports = function (){
    return new Chain ();
}; 
