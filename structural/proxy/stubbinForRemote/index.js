var serverProxy = require('./serverProxy');
var host = host = 'http://localhost:8080';

proxy = serverProxy(host);//se usa el proxy para accesar al servidor.

proxy.obtenerFecha();
proxy.obtenerHora();