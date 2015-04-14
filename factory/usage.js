var emailFactory = require ("./email");
var smsFactory = require ("./sms");
var whatsFactory = require ("./whats");

var objMensaje = smsFactory();
var objEmail = emailFactory();
var objWhats = whatsFactory();

objMensaje.enviarMensaje("mensaje de sms");
objWhats.enviarMensaje("mensaje de whats");
objEmail.enviarMensaje("mensaje de email");

