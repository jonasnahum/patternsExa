var Semestre = (function () {
    function Semestre(español, matematicas, naturales, titulo) {
        this.español = español;
        this.matematicas = matematicas;
        this.naturales = naturales;
        this.materias = [español, matematicas, naturales];
        this.titulo = titulo;
    }
        Semestre.prototype.obtenerPromedio = function () {
            return (this.matematicas.calificacion + this.español.calificacion +                   this.naturales.calificacion)/3
        };

    return Semestre;
})();

module.exports = function (español, matematicas, naturales, titulo){
    return new Semestre (español, matematicas, naturales, titulo);
}; 