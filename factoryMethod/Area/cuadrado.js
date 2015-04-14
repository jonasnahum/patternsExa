var Cuadrado = (function () {
    function Cuadrado (b, a) {
        this.b = b;
        this.a = a;
        this.resultado = 0;
    }
    Cuadrado.prototype.calcularArea = function(){
        this.resultado = this.b * this.a;        
    };
    return Cuadrado;
})();

module.exports = function (b ,a){
    return new Cuadrado (b, a);
}; 