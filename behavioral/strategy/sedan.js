var Sedan = (function () {
    function Sedan(){}
    Sedan.prototype.rentar = function (datos){
        return datos;
    };
    return Sedan;
})();

module.exports = function (){
    return new Sedan ();
}; 
