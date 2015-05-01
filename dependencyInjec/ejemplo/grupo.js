var Grupo = (function() {

    var Grupo = function(iterador) {
        this.iterador = iterador;
        
    };

    Grupo.prototype.imprimir = function() {
        while(this.iterador.hasNext()){
            var alumno = this.iterador.next();
            alumno.print();
        }
    };

    return Grupo;
})();

module.exports = function(iterador) {
    return new Grupo(iterador);
}