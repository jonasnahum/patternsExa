//pasos predefinidoos y luego sobreescribir esos pasos.

//The template method pattern is an approach that allows for some sections of
//an algorithm to be shared and other sections be implemented using different
//approaches. These farmed out sections can be implemented by any one of a
//family of methods.

//We would like to describe their processes as a set of classes, each
//one describing a different beer-making methodology. We start with a simplified
//implementation of creating beer:
var BasicBeer = (function () {
    function BasicBeer() {}
    
    BasicBeer.prototype.Create = function () {
        this.AddIngredients();
        this.Stir();
        this.Ferment();
        this.Test();
        if (this.TestingPassed()) {
            this.Distribute();
        }
    };
    BasicBeer.prototype.AddIngredients = function () {
        throw "Add ingredients needs to be implemented";//method must be overriden.
    };
    BasicBeer.prototype.Stir = function () {//method that can be changed
        //stir 15 times with a wooden spoon //but do no requiree it to changed.
    };
    BasicBeer.prototype.Ferment = function () {
        //let stand for 30 days
    BasicBeer.prototype.Test = function () {
        //draw off a cup of beer and taste it
    };
    BasicBeer.prototype.TestingPassed = function () {
        throw "Conditions to pass a test must be implemented";//must be overriden.
    };
    BasicBeer.prototype.Distribute = function () {
        //place beer in 50L casks
    };
    return BasicBeer;
})()

//As there is no concept of abstract in JavaScript, we've added exceptions to the
//various methods that must be overridden. The remaining methods can be changed
//but do not require it. An implementation of this for raspberry beer would look like
//the following code:
var RaspberryBeer = (function (_super) {
    __extends(RaspberryBeer, _super);
    function RaspberryBeer() {
        _super.apply(this, arguments);//this y los argumentos(array) que recibe.
    }
    RaspberryBeer.prototype.AddIngredients = function () {
        //add ingredients, probably including raspberries
    };
    RaspberryBeer.prototype.TestingPassed = function () {
        //beer must be reddish and taste of raspberries
    };
return RaspberryBeer;
})(BasicBeer);