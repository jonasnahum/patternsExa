var NotificationSms = (function () {
    function NotificationSms() {}
    NotificationSms.prototype.enviarMensaje = function (text) {
        console.log(text);
    };
    return NotificationSms;
})();

module.exports = function (){
    return new NotificationSms ();
}; 
