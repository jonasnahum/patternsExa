var Chango = (function () {
    function Chango() {
        this._type = "Knight";
    }
    Chango.prototype.huir = function () {//interfase.
        console.log("El chango se subió a los arboles");
    };
    Chango.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Chango;
})();
module.exports = function (){
    return new Chango ();
}; 