var semaforo = require("./semaforo");

var s = semaforo();

s.on("antesDeCambiar", function(actual) {//escuchando el "evento" y recibe la var actual
    console.log("cuidado, el semaforo está en " + actual + " y está a punto de cambiar");
});


s.on("despuesDeCambiar", function(actual) {
    console.log("**********************");
});

s.on("antesDeCambiar", function(actual) {
    console.log("-----------------------");
});

s.on("despuesDeCambiar", function(actual) {
    console.log("cuidado , el semaforo acaba de cambiar a " + actual);
});

s.cambiarEstado();
s.cambiarEstado();
s.cambiarEstado();
