var TablaPgc = (function () {
    function TablaPgc() {
    }
     
    TablaPgc.prototype.ubicar = function(pgc) {
        var result;
        if (pgc > 12 && pgc < 20){
            result = "su porcentaje de grasa corporal es NORMAL";
            return result;
        }
        if (pgc > 21 && pgc < 25){
            result = "su porcentaje de grasa corporal es SE ENCUENTRA EN EL LÍMITE";
            return result;
        }
        if (pgc > 25){
            result = "su porcentaje de grasa corporal indica qu ud. es OBESO";
            return result;
        }
    }
    return TablaPgc;
    
})();

module.exports = function (){
    return new TablaPgc ();
}; 

