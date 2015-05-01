var diContainerFactory = require('jimenez-di-container');
var di = diContainerFactory();

//registramos que en cualquier constructor
//donde reciba la var dependency se sustituya
//por console.
di.register('dependency', console);

//registrar printer factory
di.factory('printer', require('./printer'));//cuando manden llamar printer ir ala direccio.

//obtener una instancia de printer
var myObject = di.get('printer');//ya sabe que printer tiene un dependency y ocupa un console.
myObject.print('hola mundo');