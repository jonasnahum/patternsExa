var NotificationEmail = (function () {
    function NotificationEmail() {}
    NotificationEmail.prototype.enviarMensaje = function (text) {
        console.log(text);
    };
    return NotificationEmail;
})();

module.exports = function (){
    return new NotificationEmail ();
}; 