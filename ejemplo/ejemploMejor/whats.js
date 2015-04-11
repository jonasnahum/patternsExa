var NotificationWhats = (function () {
    function NotificationWhats() {}
    NotificationWhats.prototype.enviarMensaje = function (text) {
        console.log(text);
    };
    return NotificationWhats;
})();

module.exports = function (){
    return new NotificationWhats ();
}; 
