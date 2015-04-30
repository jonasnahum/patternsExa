var Sandwich = require("./sandwich");
var util = require("util");

var Jamon = (function () {
    function Jamon() {
    }
    util.inherits(Jamon, Sandwich);
    
    Jamon.prototype.ponerIngredientePrincipal = function () {
        console.log("el sandwich es de jamon");  
  
    };
return Jamon;
})();

module.exports = function (){
    return new Jamon ();
}; 