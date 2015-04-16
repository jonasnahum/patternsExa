var Purificadora = (function () {
    function Purificadora() {}
        Purificadora.prototype.verificarGarrafon = function (mensaje) {
            console.log(mensaje);
        };
        Purificadora.prototype.lavarGarrafon = function () {
            console.log("se realizo lavado de garrafon");
        };
        Purificadora.prototype.encenderOzono = function () {
            var mensaj1 = "se realizo encendido del ozono";
            return mensaj1;
        };
        Purificadora.prototype.abrirLLave = function () {
            var mensaj2 = "se realizo apertura de la llave.";
            return mensaj2;    
        };
        Purificadora.prototype.registrarVenta = function () {
            console.log("se realizo registro de la venta");
        };
        Purificadora.prototype.darCambio = function () {
            console.log("se realizo devolución de cambio al cliente...");
        };

    return Purificadora;
})();

module.exports = function (){
    return new Purificadora ();
}; 
