var Paloma = (function () {
    function Paloma() {
        this._type = "Paloma";
    }
    Paloma.prototype.vacunar = function () {//interfase.
        console.log("la paloma ha sido vacunada contra la gripe aviar");
    };
    Paloma.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Paloma;
})();
module.exports = function (){
    return new Paloma ();
}; 