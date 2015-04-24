
var Mediador = (function () {
    function Mediador(partidosPoliticos, ciudadanos) {
        this.partidosPoliticos = partidosPoliticos;
        this.ciudadanos = ciudadanos;
    }
        Mediador.prototype.buscarPartido = function (nombre) {
        
            for (var i = 0; i < this.partidosPoliticos.length; i++){
                var partido = this.partidosPoliticos[i];
                if(partido.nombre === nombre)
                    return partido;
            }
            return undefined;
          
        };
        Mediador.prototype.organizarElecciones = function () {
            var that = this;
            this.ciudadanos.forEach(function(ciudadano){
                var partidoPolitico = that.buscarPartido(ciudadano.simpatizanteDe);
                partidoPolitico.incrementarVotos();
            });  
        };
        Mediador.prototype.presentarResultados = function () {
            var ganador = this.partidosPoliticos.reduce(function(prev, current, index){
                if(prev.votos > current.votos){
                    return prev;
                }
                return current;
            });
            return ganador;
        };
    return Mediador;
})();

module.exports = function (partidosPoliticos, ciudadanos){
    return new Mediador (partidosPoliticos, ciudadanos);
}; 
