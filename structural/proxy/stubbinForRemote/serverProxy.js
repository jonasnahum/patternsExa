var request = require('request');
var ServerProxy = (function (host) {
    function ServerProxy(host) {
        this.host = host;
    }
    ServerProxy.prototype.obtenerFecha = function() {
        request(this.host + '/obtenerFecha', function (error, response, body) {//request escribe esto en la url.
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
            if (error) {
                console.log('por favor inicia el server: $ node server');
            }
        });
    };
    ServerProxy.prototype.obtenerHora = function() {
        request(this.host + '/obtenerHora', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
            if (error) {
                console.log('por favor inicia el server: $ node server');
            }
        });
    }
    return ServerProxy;
})();

module.exports = function(host) {
    return new ServerProxy(host);
}