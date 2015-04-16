var factoryFactory = require ("./factory");
var factory = factoryFactory();

var Cliente = (function () {
    function Cliente() {
    }
    Cliente.prototype.build = function (config) {
        var obj = factory.build(config);//hasta aquí va el objeto que regresa del producto elegido.
        var area = obj.calcularArea();//manda llamar su metodo de la interfase.
        var areaThis = obj.resultado;
        return areaThis;
    };
    return Cliente;
})();

module.exports = function (){
    return new Cliente();
}; 
