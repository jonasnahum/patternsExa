var factoryFactory = require ("./factory");
var factory = factoryFactory();

var Cliente = (function () {
    function Cliente() {
    }
    Cliente.prototype.build = function (config) {
        factory.build(config).llenarTanque();
        
    };
    return Cliente;
})();

module.exports = function (){
    return new Cliente();
}; 
