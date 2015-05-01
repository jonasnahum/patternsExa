var diContainerFactory = require('jimenez-di-container');
var di = diContainerFactory();

var alumnoFactory = require("./alumno.js");
var iteradorFactory = require("./iterador.js");

var arr = [];
arr.push(alumnoFactory("jonas", "jimenez", 8));
arr.push(alumnoFactory("raul", "montana", 9));
arr.push(alumnoFactory("juanita", "montana", 6));

di.register('iterador', iteradorFactory(arr));//cuando vea una variable iterador , mandarle..

di.factory('grupo', require('./grupo'));

var grupo = di.get("grupo");

grupo.imprimir();

