var Triangulo = (function () {
    function Triangulo(lado1,lado2,lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.base = lado1;
        this.altura = lado2;
        
    }
     
    Triangulo.prototype.calcularArea = function() {
        return (this.base * this.altura)/2;
    }
    Triangulo.prototype.calcularPerimetro = function() {
        return (this.lado1+this.lado2+this.lado3);
    }
    return Triangulo;
    
})();

module.exports = function (lado1,lado2,lado3){
    return new Triangulo (lado1,lado2,lado3);
}; 

