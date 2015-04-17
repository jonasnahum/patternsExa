//Composite is a heavily used pattern in JavaScript code which deals with HTML
//elements, as they are a tree structure.
//The key feature of the composite pattern is the interchangeability of a component
//with its children. So if we have a composite which implements IComponent , then
//all of the components of the composite will also implement IComponent .

//Operations on the composite object are typically proxied through to all of the
//contained objects.

//A simple ingredient, one which would be a leaf node, is shown in the following code:
var SimpleIngredient = (function () {
    function SimpleIngredient(name, calories, ironContent, vitaminCContent) {
        this.name = name;
        this.calories = calories;
        this.ironContent = ironContent;
        this.vitaminCContent = vitaminCContent;
    }
    SimpleIngredient.prototype.GetName = function () {
        return this.name;
    };
    SimpleIngredient.prototype.GetCalories = function () {
        return this.calories;
    };
    SimpleIngredient.prototype.GetIronContent = function () {
        return this.ironContent;
    };
    SimpleIngredient.prototype.GetVitaminCContent = function () {
        return this.vitaminCContent;
    };
    return SimpleIngredient;
})();

//It can be used interchangeably with a compound ingredient which has a list of
//ingredients, as shown in the following code:
var CompoundIngredient = (function () {
    function CompoundIngredient(name) {
        this.name = name;
        this.ingredients = new Array();
    }
    CompoundIngredient.prototype.AddIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    CompoundIngredient.prototype.GetName = function () {
        return this.name;
    };
    CompoundIngredient.prototype.GetCalories = function () {
        var total = 0;
        for (var i = 0; i<this.ingredients.length; i++) {
            total += this.ingredients[i].GetCalories();
        }
        return total;
    };
    CompoundIngredient.prototype.GetIronContent = function () {
        var total = 0;
        for (var i = 0; i<this.ingredients.length; i++) {
            total += this.ingredients[i].GetIronContent();
        }
        return total;
    };
    CompoundIngredient.prototype.GetVitaminCContent = function () {
        var total = 0;
        for (var i = 0; i<this.ingredients.length; i++) {
            total += this.ingredients[i].GetVitaminCContent();
        }   
        return total;
    };
return CompoundIngredient;
})();

//The composite ingredient loops over its internal ingredients and performs the same
//operation on each of them. There is, of course, no need to define an interface due to
//the prototype model.
//To make use of this compound ingredient, we might use the following code:

var egg = new SimpleIngredient("Egg", 155, 6, 0);
var milk = new SimpleIngredient("Milk", 42, 0, 0);
var sugar = new SimpleIngredient("Sugar", 387, 0,0);
var rice = new SimpleIngredient("Rice", 370, 8, 0);

var ricePudding = new CompoundIngredient("Rice Pudding");
ricePudding.AddIngredient(egg);
ricePudding.AddIngredient(rice);
ricePudding.AddIngredient(milk);
ricePudding.AddIngredient(sugar);
console.log("A serving of rice pudding contains:");
console.log(ricePudding.GetCalories() + " calories");
//As both the simple and compound
//version of the ingredients have the same interface, the caller does not need to know
//that there is any difference between the two ingredient types.