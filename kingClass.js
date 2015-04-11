//Factory pattern is a method to crate kits of objects without knowing the concrete types of 
//objects.


//king class.
var KingJoffery= (function () {

    function KingJoffery() {
    }
    KingJoffery.prototype.makeDecision = function () {console.log("estoy decidiendo soy el rey")};
    KingJoffery.prototype.marry = function () {};
    return KingJoffery;
})();

//hand of the king
var LordTywin = (function () {
    function LordTywin() {
    }
    LordTywin.prototype.makeDecision = function () {console.log("estoy decidiendo soy handoftheking")};
    return LordTywin;
})();

//concrete factory method. instantiates new instances of each of the required clases an return them.
var LannisterFactory = (function () {
    function LannisterFactory() {
    }
    LannisterFactory.prototype.getKing = function () {
        return new KingJoffery();//tiene las funciones de makeDecision and marry.
    };
    LannisterFactory.prototype.getHandOfTheKing = function (){
        return new LordTywin();
    };
    return LannisterFactory;
})();

//alternative of factory method. a factory can have direrent implementation for a different ruling
//family.
//var TargaryenFactory = (function () {
//        function TargaryenFactory() {
//    }
//    TargaryenFactory.prototype.getKing = function () {
//        return new KingAerys();
//    };
//    TargaryenFactory.prototype.getHandOfTheKing = function () {
//        return new LordConnington();
//    };
//    return TargaryenFactory;
//})();

var CourtSession = (function () {
    function CourtSession(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }
    CourtSession.prototype.complaintPresented = function (complaint){
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
            this.abstractFactory.getHandOfTheKing().makeDecision();
        } else
        this.abstractFactory.getKing().makeDecision();
    };
    return CourtSession;
})();

//We can now call the CourtSession class and inject different functionality
//depending on which factory we pass in:

//var courtSession1 = new CourtSession(new TargaryenFactory());
//courtSession1.complaintPresented({ severity: 8 });
//courtSession1.complaintPresented({ severity: 12 });
var courtSession2 = new CourtSession(new LannisterFactory());
courtSession2.complaintPresented({ severity: 8 });
courtSession2.complaintPresented({ severity: 12 });