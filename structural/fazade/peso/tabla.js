var Tabla = (function () {
    function Tabla() {
    }
     
    Tabla.prototype.ubicar = function(imc) {
        var result;
        if (imc < 18.49){
            result = "ud es un delgado";
            return result;
        }
        if (imc < 24.99){
            result = "felicidades ud se encuentra normal";
            return result;
        }
        if (imc < 29.99){
            result = "ud es un preobeso";
            return result;
        }
        if (imc < 39.99){
            result = "ud es un obeso";
            return result;
        }
    }
    return Tabla;
    
})();

module.exports = function (){
    return new Tabla ();
}; 


