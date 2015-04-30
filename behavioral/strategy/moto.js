var Moto = (function () {
    function Moto(){}
    Moto.prototype.rentar = function (datos){
        return datos;
    };
    return Moto;
})();

module.exports = function (){
    return new Moto ();
}; 
