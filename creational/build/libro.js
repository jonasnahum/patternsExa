//creational paterns: number of ways to create //objects in order
//to optimize, for reuse.
//In order to simplify the building of
//these classes and encapsulate the knowledge of building the class away from the
//consumers, a builder may be used.
var Event = (function () {
    function Event(name) {
        this.name = name;
    }
    return Event;
})();
Westeros.Event = Event;

var Prize = (function () {//productos.
    function Prize(name) {
        this.name = name;
    }
    return Prize;
})();
Westeros.Prize = Prize;

var Attendee = (function () {
    function Attendee(name) {
        this.name = name;
    }
    return Attendee;
})();
Westeros.Attendee = Attendee;

var Tournament = (function () {
    this.Events = [];
    function Tournament() {
    }
    return Tournament;
})();
Westeros.Tournament = Tournament;

//We'll implement two builders that create different tournaments. This can be seen in
//the following code:

var LannisterTournamentBuilder = (function () {//clases concretas. implementan la interfase.
    function LannisterTournamentBuilder() {
    }
    LannisterTournamentBuilder.prototype.build = function () {//metodo.
        var tournament = new Tournament();
        tournament.events.push(new Event("Joust"));
        tournament.events.push(new Event("Melee"));
        tournament.attendees.push(new Attendee("Jamie"));
        tournament.prizes.push(new Prize("Gold"));
        tournament.prizes.push(new Prize("More Gold"));
        return tournament;
    };
    return LannisterTournamentBuilder;
})();
Westeros.LannisterTournamentBuilder = LannisterTournamentBuilder;

var BaratheonTournamentBuilder = (function () {//concrete builder.
    function BaratheonTournamentBuilder() {
    }
    BaratheonTournamentBuilder.prototype.build = function () {
        var tournament = new Tournament();
        tournament.events.push(new Event("Joust"));
        tournament.events.push(new Event("Melee"));
        tournament.attendees.push(new Attendee("Stannis"));
        tournament.attendees.push(new Attendee("Robert"));
        return tournament;
    };
    return BaratheonTournamentBuilder;
})();
Westeros.BaratheonTournamentBuilder = BaratheonTournamentBuilder;

//Finally, the director, or as we're calling it TournamentBuilder , simply takes a
//builder and executes it:

var TournamentBuilder = (function () //director.manda llamar los concrete builder.
    function TournamentBuilder() {
    }
    TournamentBuilder.prototype.build = function (builder) {
        return builder.build();
    };
    return TournamentBuilder;
})();
Westeros.TournamentBuilder = TournamentBuilder;

//we could have a builder that is responsible for populating
//the events and another that is responsible for populating the attendees.
