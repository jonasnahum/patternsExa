//The strategy pattern provides a method of swapping these strategies out in a
//transparent fashion.

//The interface might look something like the following code:
//export interface ITravelMethod{

export interface ITravelMethod{
    Travel(source: string, destination: string) : TravelResult;
}

//The travel result communicates back to the caller some information about the
//method of travel. In our case, we track how long the trip will take, what the
//risks are, and how much it will cost:
var TravelResult = (function () {
    function TravelResult(durationInDays, probabilityOfDeath, cost){
        this.durationInDays = durationInDays;
        this.probabilityOfDeath = probabilityOfDeath;
        this.cost = cost;
    }
    return TravelResult;
})();
Travel.TravelResult = TravelResult;

//In this scenario, we might like to have an additional method that predicts some of the
//risks, to allow for automating selection of a strategy.
//Implementing the strategies is as simple as:
var SeaGoingVessel = (function () {
    function SeaGoingVessel() {
    }
    SeaGoingVessel.prototype.Travel = function (source, destination){
        return new TravelResult(15, .25, 500);
    };
    return SeaGoingVessel;
})();

var Horse = (function () {
    function Horse() {
    }
    Horse.prototype.Travel = function (source, destination) {
        return new TravelResult(30, .25, 50);
    };
    return Horse;
})();

var Walk = (function () {
    function Walk() {
    }
    Walk.prototype.Travel = function (source, destination) {
        return new TravelResult(150, .55, 0);
    };
    return Walk;
})();

//Obviously, the actual calculations around risk, cost, and duration would not be
//hardcoded in an actual implementation. To make use of these, one needs only to
//use the following code:
var currentMoney = getCurrentMoney();
var strat;
if (currentMoney > 500)
strat = new SeaGoingVessel();
else if (currentMoney > 50)
strat = new Horse();
else
strat = new Walk();
var travelResult = strat.Travel();

//To improve the level of abstraction for this strategy, we might replace the
//specific strategies with more generally named ones that describe what it is
//we're optimizing for:
var currentMoney = getCurrentMoney();
var strat;
if (currentMoney > 500)
strat = new FavorFastestAndSafestStrategy();
else
strat = new FavorCheapest();
var travelResult = strat.Travel();


