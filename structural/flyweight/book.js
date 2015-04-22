//The flyweight pattern is used in instances when there is a large number of instances
//of objects which only vary slightly.
//the number of instances is highly dependent on how
//expensive the object is to create.
//Flyweight offers a way to compress this data, by only keeping track of the
//values that differ from some prototype in each instance.

//We can see the simple set of fields in the following code:
var Soldier = (function () {
    function Soldier() {
        this.Health = 10;
        this.FightingAbility = 5;
        this.Hunger = 0;
    }
    return Soldier;
})();

//Of course, with an army of 10,000 soldiers, keeping track of all of this requires quite
//some memory. Let's take a different approach and use prototypes:
var Soldier = (function () {
    function Soldier() { }
        Soldier.prototype.Health = 10;
        Soldier.prototype.FightingAbility = 5;
        Soldier.prototype.Hunger = 0;
    return Soldier;
})();

//Using this approach, we are able to defer all requests for the soldier's health to the
//prototype. Setting the value is easy too, as shown in the following code:
var soldier1 = new Soldier();
var soldier2 = new Soldier();
console.log(soldier1.Health);
soldier1.Health = 7;
console.log(soldier1.Health);
console.log(soldier2.Health);
delete soldier1.Health;
console.log(soldier1.Health);
//10
//7
//10
//10
//You'll note that we make a call to remove the property override and return the value
//back to the parent value.
