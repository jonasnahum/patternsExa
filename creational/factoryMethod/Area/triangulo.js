"use strict";
var Triangulo = (function () {
    function Triangulo (b, a) {
        this.b = b;
        this.a = a;
        this.resultado = 0;
    }
    Triangulo.prototype.calcularArea = function(){
        this.resultado = (this.b * this.a)/2;       
    };
    return Triangulo;
})();

module.exports = function (b ,a){
    return new Triangulo (b, a);
}; 