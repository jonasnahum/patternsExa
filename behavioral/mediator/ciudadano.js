var Ciudadano = (function () {
    function Ciudadano(nombrePartido) {
        this.simpatizanteDe = nombrePartido;
    }
 
    return Ciudadano;
})();

module.exports = function (nombrePartido){
    return new Ciudadano (nombrePartido);
}; 
