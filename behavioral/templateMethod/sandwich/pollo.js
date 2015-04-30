var Sandwich = require("./sandwich");
var util = require("util");

var Pollo = (function () {
    function Pollo() {
    }
    util.inherits(Pollo, Sandwich);
    
    Pollo.prototype.ponerIngredientePrincipal = function () {
        console.log("el sandwich es de pollo");  

    };
return Pollo;
})();

module.exports = function (){
    return new Pollo ();
}; 