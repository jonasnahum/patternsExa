var Gallina = (function () {
    function Gallina() {
        this._type = "Gallina";
    }
    Gallina.prototype.huir = function () {//interfase.
        console.log("la gallina se fué debajo de los arboles");
    };
    Gallina.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Gallina;
})();
module.exports = function (){
    return new Gallina ();
}; 