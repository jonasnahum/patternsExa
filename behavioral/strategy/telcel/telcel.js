var Telcel = (function () {
    function Telcel(tarifaMin, tarifaNormal){
        this.tarifaMin = tarifaMin;
        this.tarifaNormal = tarifaNormal;
    }
    Telcel.prototype.obtenerTarifa = function (saldo){
        if (saldo > 200)
            return this.tarifaMin;
        else{
            return this.tarifaNormal;
        }
    };
    Telcel.prototype.facturar = function (cliente){
        var strat = this.obtenerTarifa(cliente.saldo);
        var pesos = strat.cobrar(cliente.minutos);
        var texto = "usted debe pagar " + pesos + " pesos";
        return texto;
    };
    return Telcel;
})();

module.exports = function (tarifaMin, tarifaNormal){
    return new Telcel (tarifaMin, tarifaNormal);
}; 
