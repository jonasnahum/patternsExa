var agricultorFactory = require ("./agricultor");
var choferFactory = require ("./chofer");
var maestroFactory = require ("./maestro");
var adminFactory = require ("./adminJobs");

agricultor = agricultorFactory();
chofer = choferFactory();
maestro = maestroFactory();


var admin = adminFactory(agricultor, chofer, maestro);

admin.trabajar("pedrito", "sembrar");
admin.trabajar("Jonas", "manejar");
admin.trabajar("Juan", "enseñar");

