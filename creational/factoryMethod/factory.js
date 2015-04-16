var tsuruFactory = require ("./tsuru");
var camionetaFactory = require ("./camioneta");
var hummerFactory = require ("./hummer");

var TanqueFactory = (function () {
    function TanqueFactory() {
    }
    TanqueFactory.prototype.build = function (config) {
        if (config.auto === "tsuru")
            return tsuruFactory(config.mensaje);
        if (config.auto === "silverado")
            return camionetaFactory(config.mensaje);
        if (config.auto === "hummer")
            return hummerFactory(config.mensaje);
        return tsuruFactory(config.mensaje)
    };
    return TanqueFactory;
})();

module.exports = function (){
    return new TanqueFactory ();
}; 
