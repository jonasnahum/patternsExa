var Camioneta = (function () {
    function Camioneta(){}
    Camioneta.prototype.rentar = function(datos){
        return datos;
    };
    return Camioneta;
})();

module.exports = function (){
    return new Camioneta ();
}; 
