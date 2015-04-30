//Visitor provides for a method of decoupling an algorithm from the object structure on //which it operates.
/*If we wanted to perform some action over a collection of objects that differ in type and we want to perform a different action depending on the object type, we would typically need to make use of a large if statement, but this pattern is the solution.
*/
//each member of the
//army implements a hypothetical interface called IMemberOfArmy :
interface IMemberOfArmy{
    printName();
}

//The simplest approach is to just
//define a variable on the class that denotes its type:
var Knight = (function () {
    function Knight() {
        this._type = "Knight";
    }
    Knight.prototype.printName = function () {
        console.log("Knight");
    };
    return Knight;
})();

//Given this approach, we can now implement the visitor pattern. The first step is to
//expand the various members of our army to have a generic method on them that
//takes a visitor and applies it:
var Knight = (function () {
    function Knight() {
        this._type = "Knight";
    }
    Knight.prototype.printName = function () {
        console.log("Knight");
    };
    Knight.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Knight;
})();

//Now, we need to build a visitor. The following code approximates the if statements
//we had in the previous code:
var SelectiveNamePrinterVisitor = (function () {
    function SelectiveNamePrinterVisitor() {
    }
    SelectiveNamePrinterVisitor.prototype.Visit = function(memberOfArmy) {
        if (memberOfArmy._type == "Knight") {
            this.VisitKnight(memberOfArmy);
        } else {
            console.log("Not a knight");
        }
    };
    SelectiveNamePrinterVisitor.prototype.VisitKnight = function (memberOfArmy) {
        memberOfArmy.printName();
    };
    return SelectiveNamePrinterVisitor;
})();

//This visitor would be used as such:
var collection = [];
collection.push(new Knight());
collection.push(new FootSoldier());
collection.push(new Lord());
collection.push(new Archer());
var visitor = new SelectiveNamePrinterVisitor();
for (var i = 0; i < collection.length; i++) {
    collection[i].visit(visitor);
}
//As you can see, we've pushed the decisions about what is the type of the item in the
//collection down to the visitor. This decouples the items themselves from the visitor