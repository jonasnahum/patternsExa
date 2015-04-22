//The façade pattern is a special case of the adapter pattern that provides a
//simplified interface over a collection of classes.
//un patron que actua sobre una tarea especifica con ayuda de varias clases que hacen diferentes
//cosas. les da coherencia para hacer una tarea o un propósito común. las clases deben permanecer //a un mismo campo semántico, y el index es como la tarea final que juntan entre todas. como el //ejemplo de la base de datos que ocupa endpoint, url, etc.


var Ship = (function () {
    function Ship() {
    }
    Ship.prototype.TurnLeft = function () {
    };
    Ship.prototype.TurnRight = function () {
    };
    Ship.prototype.GoForward = function () {
    };
    return Ship;
})();

Transportation.Ship = Ship;
var Admiral = (function () {
    function Admiral() {
    }
    return Admiral;
})();

Transportation.Admiral = Admiral;
    var SupplyCoordinator = (function () {
    function SupplyCoordinator() {
    }
    return SupplyCoordinator;
})();
Transportation.SupplyCoordinator = SupplyCoordinator;

//Then, we might build a façade as follows:
var Fleet = (function () {
    function Fleet() {
    }
    Fleet.prototype.setDestination = function (destination) {
        //pass commands to a series of ships, admirals and whoever else needs it.
    };
    Fleet.prototype.resupply = function () {
    };
    Fleet.prototype.attack = function (destination) {
        //attack a city
    };
    return Fleet;
})();
