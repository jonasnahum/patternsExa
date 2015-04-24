var usuarioFactory = require("./usuario");
var proxyFactory = require("./proxy");

var usuario = usuarioFactory("jonas","jonasnahum@gmail","jonjon");
var proxy = proxyFactory(usuario);

console.log(proxy.nombre);//proxy manda llamar a usuario.
console.log(proxy.email);
console.log(proxy.contraseña);
