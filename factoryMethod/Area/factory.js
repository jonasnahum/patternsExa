var trianguloFactory = require ("./triangulo");
var cuadradoFactory = require ("./cuadrado");
var circuloFactory = require ("./circulo");

var Factory = (function () {
    function Factory() {
    }
    Factory.prototype.build = function (config) {
        if (config.figura === "triangulo")
            return trianguloFactory(config.b, config.a);
        if (config.figura === "cuadrado")
            return cuadradoFactory(config.b, config.a);
        if (config.figura === "circulo")
            return circuloFactory(config.pi, config.r);
        return trianguloFactory()
    };
    return Factory;
})();

module.exports = function (){
    return new Factory ();
}; 
