//The memento pattern provides an approach to restore the state of objects to a
//previous state.
//The boss (caretaker) dictates some memo to the secretary (originator)
//who writes notes in a notepad (memento). From time to time, the boss may request
//that the secretary cross out what he has just written.

//We start off with a world state that gives information on the state of the world for a
//certain starting point:
var WorldState = (function () {
    function WorldState(numberOfKings, currentKingInKingsLanding,season) {
        this.numberOfKings = numberOfKings;
        this.currentKingInKingsLanding = currentKingInKingsLanding;
        this.season = season;
    }
return WorldState;
})();

//The next thing we need is a class that provides the same state as the memento and
//allows for the creation and restoration of mementos. In our example, we've called
//this a world state provider:
var WorldStateProvider = (function () {
    function WorldStateProvider() {
    }
    WorldStateProvider.prototype.saveMemento = function () {
        return new WorldState(this.numberOfKings,//regresa un objeto.
        this.currentKingInKingsLanding, this.season);
    };
    WorldStateProvider.prototype.restoreMemento = function (memento){
        this.numberOfKings = memento.numberOfKings;//lo que recibe cambia lo que ya esta.
        this.currentKingInKingsLanding = memento.currentKingInKingsLanding;
        this.season = memento.season;
    };
    return WorldStateProvider;
})();

//Finally, we need a client for the foretelling, which we'll call soothsayer:
var Soothsayer = (function () {
    function Soothsayer() {
    this.startingPoints = [];
    this.currentState = new WorldStateProvider();
    }
        Soothsayer.prototype.setInitialConditions = function(numberOfKings,//guarda secretaria. currentKingInKingsLanding, season) {
        this.currentState.numberOfKings = numberOfKings;
        this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
        this.currentState.season = season;
        };
    Soothsayer.prototype.alterNumberOfKingsAndForetell = function (numberOfKings) {
        this.startingPoints.push(this.currentState.saveMemento());//respalda secretaria
        this.currentState.numberOfKings = numberOfKings;//y ya respaldada, la altera.
        //run some sort of prediction
        };
    Soothsayer.prototype.alterSeasonAndForetell = function (season)
        {
        //as above
        };
    Soothsayer.prototype.alterCurrentKingInKingsLandingAndForetell =
    function (currentKingInKingsLanding) {
    //as above
    };
    Soothsayer.prototype.tryADifferentChange = function () {//undo
        this.currentState.restoreMemento(this.startingPoints.pop());//secretaria restaurar.
        };
    return Soothsayer;
})();