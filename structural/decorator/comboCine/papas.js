var Papas = (function () {
    function Papas(gramos) {
        this.gramos = gramos;
    }
    return Papas;
})();

module.exports = function (gramos){
    return new Papas(gramos);
};
