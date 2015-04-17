var seccionFactory = require ("./seccion");
var periodicoFactory = require ("./periodico");

var deportes = seccionFactory("El chivas gana partido", "ayer a las 10 pm");
var politica = seccionFactory("Luisa Maria Calderon", "se lanza como candidata");

var laOpinion = periodicoFactory("La Opinion de Michoacan");

laOpinion.agregarSeccion(deportes);
laOpinion.agregarSeccion(politica);

console.log("INDICE");
var indice = laOpinion.getTitulo();
console.dir (indice); 
