var Sandwich = (function () {
    function Sandwich() {}
    Sandwich.prototype.preparar = function () {
        this.ponerPanAderezo();
        this.ponerIngredientePrincipal();
    };
    Sandwich.prototype.ponerPanAderezo = function () {
        console.log("tu sandwich tiene pan y aderezo");  
       
    };
    Sandwich.prototype.ponerIngredientePrincipal = function () {
       throw "debe ser implementado el metodo de ingredientePrincipal";//must be overriden.
    };
    return Sandwich;
})()
module.exports = Sandwich;//se exporta el puro constructor.//se exporta todo el modulo en el exports.//porque esta es una clase abstracta.//no se deben crear instancias de esta clase, .