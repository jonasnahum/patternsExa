var Hummer = (function () {
    function Hummer () {}
    Hummer.prototype.llenarTanque = function (mensaje){
        console.log(mensaje);
    };
    return Hummer;
})();

module.exports = function (){
    return new Hummer ();
}; 