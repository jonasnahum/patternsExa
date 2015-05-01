var Gallina = (function () {
    function Gallina() {
        this._type = "Gallina";
    }
    Gallina.prototype.vacunar = function () {//interfase.
        console.log("la gallina ha sido vacunada contra la gripe aviar");
    };
    Gallina.prototype.visit = function (visitor) {
        visitor.visit(this);
    };
    return Gallina;
})();
module.exports = function (){
    return new Gallina ();
}; 