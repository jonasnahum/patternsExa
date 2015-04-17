//en este caso, el notificador tiene un metodo enviar (mensaje) dentro del metodo notificar. y en celular no es igual, este tiene un metodo enviarSms(mensaje). son parecidos pero no iguales las clases.el adapter, recibe la clase a igualar, el adapter tiene un metodo igual al que se ocupa en notificar, osea un metodo enviar (mensaje), que adentro manda llamar el metodo de celular que es parecido pero no igual, de esta manera se adapta una clase a  la otra, celular a notificar, completando lo que haga falta, en este caso hizo falta un metodo enviar para que celular tuviera un metodo enviar igual a notificador.
var Adapter = (function () {
    function Adapter(celular) {
        this.celular = celular;
    }
        Adapter.prototype.enviar = function (mensaje) {
            this.celular.enviarSms(mensaje);
        };

    return Adapter;
})();

module.exports = function (celular){
    return new Adapter (celular);
}; 
