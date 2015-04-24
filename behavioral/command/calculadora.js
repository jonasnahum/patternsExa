var Calculadora = (function () {
    function Calculadora() { 

    }
    Calculadora.prototype.sumar = function (a,b){
        return a + b;
    };
    Calculadora.prototype.restar = function (a,b){
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a,b){
        return a * b;
    };
    Calculadora.prototype.dividir = function (a,b){
        return a / b;
    };
    
    
    
    
    return Calculadora;
    
})();

module.exports = function (){
    return new Calculadora ();
}; 

