var ParitidoPolitico = (function () {
    function ParitidoPolitico(nombre) {
        this.nombre = nombre;
        this.votos = 0;
    }
        ParitidoPolitico.prototype.incrementarVotos = function () {
            this.votos = this.votos + 1;
        };
      
    return ParitidoPolitico;
})();

module.exports = function (nombre){
    return new ParitidoPolitico (nombre);
}; 
