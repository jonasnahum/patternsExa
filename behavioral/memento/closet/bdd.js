var vestimentaFactory = require("./vestimenta");

var Bdd = (function () {
    function Bdd() {
        this.dias = [];
    }
    Bdd.prototype.guardarVestimenta = function (dia, vestimenta) {
        this.dias[dia]=vestimentaFactory(vestimenta.colorCamisa, vestimenta.colorPantalon);
    };
    Bdd.prototype.verVestimenta = function (dia){
        return this.dias[dia];
        };
    return Bdd;
})();

module.exports = function (){
    return new Bdd ();
}; 
