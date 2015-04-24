var Comando = (function () {
    function Comando(nombre, parametros) {
        this.nombre = nombre;
        this.parametros = parametros;
    }
    
    return Comando;
    
})();

module.exports = function (nombre, parametros){
    return new Comando (nombre, parametros);
}; 

