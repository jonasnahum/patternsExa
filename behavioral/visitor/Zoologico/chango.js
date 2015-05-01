var Chango = (function () {
    function Chango() {
        this._type = "Knight";
    }
    Chango.prototype.vacunar = function () {//interfase.
        console.log("el chango no contrae la gripe aviar");
    };
    Chango.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Chango;
})();
module.exports = function (){
    return new Chango ();
}; 