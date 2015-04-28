var alumnoFactory = require("./alumno");
var aprobadoFactory = require("./aprobado");
var reprobadoFactory = require("./reprobado");

var estadoAprobado = aprobadoFactory();
var alumnoAprobado = alumnoFactory(estadoAprobado, 2, 6);
var gradoActual = alumnoAprobado.grado;
alumnoAprobado.avanzarGrado();
var gradoAvanzado = alumnoAprobado.grado;
console.log("el grado actual de alumno aprobado es " + gradoActual + " después de avanzarGrado se encuentra en " + gradoAvanzado);

var estadoReprobado = reprobadoFactory();
var alumnoReprobado = alumnoFactory(estadoReprobado, 2, 4);
var gradoActual = alumnoReprobado.grado;
alumnoReprobado.avanzarGrado();
var gradoAvanzado = alumnoReprobado.grado;
console.log("el grado actual de alumno reprobado es " + gradoActual + " después de avanzarGrado se encuentra en " + gradoAvanzado);