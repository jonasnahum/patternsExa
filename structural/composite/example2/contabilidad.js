var depaFactory = require ("./departamento");
var superFactory = require ("./superMercado");

var deportes = depaFactory(10, 50);
var ropa = depaFactory(50, 500);

var comercialMexicana = superFactory();

comercialMexicana.agregarDepartamento(deportes);
comercialMexicana.agregarDepartamento(ropa);

//interchangeability of a component
//with its children.//osea alguien tiene que consumir estas clases y que se le pueda pasar
//tanto un departamento como un comercialmexicana. y eso es intercambiable.

console.log("TOTAL GENERAL");
var total = comercialMexicana.getTotal();
console.log (total); 
