var jefeFactory = require("./jefe");

var jefe = jefeFactory ();

var apuntes = jefe.escribir("primer apunte de la secretaria");
console.log(apuntes);
var apuntesCambiados = jefe.cambiarApuntes("estos son los nuevos apuntes");
console.log(apuntesCambiados);
var apunteAnterior = jefe.volverUltimoApunte();
console.log(apunteAnterior.apuntes);
