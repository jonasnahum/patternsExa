//bridge es un patron igual a adapter, pero tiene dos o mas adapters.

var notFactory = require ("./notificator");
var celFactory = require ("./celular");
var adapFactory = require ("./celMedioAdapter");
var whatsFactory = require ("./whats");
var adaptWhatsFactory = require ("./whatsAdapter");


var celular = celFactory();
var adapter = adapFactory(celular);
var notificator = notFactory();

var whats = whatsFactory();
var adaptWhats = adaptWhatsFactory(whats);

var mensaje = "hola";
var mensajeWhats = "hola desde whats"

notificator.notificar(adapter, mensaje);
notificator.notificar(adaptWhats, mensajeWhats);