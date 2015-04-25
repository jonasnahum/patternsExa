var Vestimenta = (function () {
    function Vestimenta(colorCamisa, colorPantalon) {
        this.colorCamisa = colorCamisa;
        this.colorPantalon = colorPantalon;
    }
return Vestimenta;
})();

module.exports = function (colorCamisa, colorPantalon){
    return new Vestimenta (colorCamisa, colorPantalon);
}; 
