var Circulo = (function () {
    function Circulo (pi, r) {
        this.pi = pi;
        this.r = r;
        this.resultado = 0;
    }
    Circulo.prototype.calcularArea = function(){
        var multi = this.pi * this.r;
        this.resultado = (multi * multi);
    };
    return Circulo;
})();

module.exports = function (pi, r){
    return new Circulo (pi, r);
}; 