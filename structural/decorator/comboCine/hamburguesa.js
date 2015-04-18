var Hamburguesa = (function () {
    function Hamburguesa(carnes) {
        this.carnes = carnes;
    }
    return Hamburguesa;
})();

module.exports = function (carnes){
    return new Hamburguesa(carnes);
};
