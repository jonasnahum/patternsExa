var Seccion = (function () {
    function Seccion(titulo, subtitulo) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
    }
    Seccion.prototype.getTitulo = function () {
        return this.titulo;
    };
    Seccion.prototype.getSubtitulo = function () {
        return this.subtitulo;
    };
    return Seccion;
})();

module.exports = function (titulo, subtitulo){
    return new Seccion (titulo, subtitulo);
}; 