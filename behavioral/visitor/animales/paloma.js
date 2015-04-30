var Paloma = (function () {
    function Paloma() {
        this._type = "Paloma";
    }
    Paloma.prototype.huir = function () {//interfase.
        console.log("la Paloma se fue volando");
    };
    Paloma.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Paloma;
})();
module.exports = function (){
    return new Paloma ();
}; 