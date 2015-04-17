var GradoEscolar = (function () {
    function GradoEscolar(semestre1, semestre2, titulo) {
        this.semestre1 = semestre1;
        this.semestre2 = semestre2;
        this.titulo = titulo;
    }
        GradoEscolar.prototype.obtenerPromedio = function () {
            return (this.semestre1.obtenerPromedio() + this.semestre2.obtenerPromedio())/2;
        };

    return GradoEscolar;
})();

module.exports = function (semestre1, semestre2, titulo){
    return new GradoEscolar (semestre1, semestre2, titulo);
}; 