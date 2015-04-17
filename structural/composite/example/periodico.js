var Periodico = (function () {
    function Periodico(name) {
        this.name = name;
        this.secciones = new Array();
    }
    Periodico.prototype.agregarSeccion = function (seccion) {
        this.secciones.push(seccion);
    };
    Periodico.prototype.getTitulo = function () {
        var listaTitulos = "";
        for (var i = 0; i<this.secciones.length; i++) {
            listaTitulos += this.secciones[i].getTitulo().toString()+"\n";
        }
        return listaTitulos;
    };
    Periodico.prototype.getSubtitulo = function () {
        var listaSubTitulos = 0;
        for (var i = 0; i<this.secciones.length; i++) {
            listaSubTitulos += this.secciones[i].getSubtitulo();
        }
        return listaSubTitulos;
    };
    
return Periodico;
})();


module.exports = function (name){
    return new Periodico (name);
}; 