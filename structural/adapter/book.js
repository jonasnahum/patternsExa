//structural patterns; these
//are patterns that are concerned with easing the design by describing simple ways
//in which objects can interact.

interface Ship{
    SetRudderAngleTo(angle: number);
    SetSailConfiguration(configuration:             SailConfiguration);
    SetSailAngle(sailId: number, sailAngle:         number);
    GetCurrentBearing(): number;
    GetCurrentSpeedEstimate(): number;
    ShiftCrewWeightTo(weightToShift: number,       locationId: number);
}
//I would really like a much simpler interface //that abstracts away all the fiddly little
//details. Ideally, something like the //following code:
interface SimpleShip{
    TurnLeft();
    TurnRight();
    GoForward();
}

//The adapter will have the interface of SimpleShip , but it will perform actions on a
//wrapped instance of Ship . The code might look similar to the following:
var ShipAdapter = (function () {
    function ShipAdapter() {
        this._ship = new Ship();//va ejecutar methodos de esta clase que es mas compleja.
    }
    ShipAdapter.prototype.TurnLeft = function () {//metodo que esta en SimpleShip interface.
        this._ship.SetRudderAngleTo(-30);
        this._ship.SetSailAngle(3, 12);
    };
    ShipAdapter.prototype.TurnRight = function () {
        this._ship.SetRudderAngleTo(30);
        this._ship.SetSailAngle(5, -9);
    };
    ShipAdapter.prototype.GoForward = function () {
        //do something else to the _ship
    };
return ShipAdapter;
})();

//To use this pattern, the code might look like the following:
var ship = new ShipAdapter();
ship.GoForward();
ship.TurnLeft();


