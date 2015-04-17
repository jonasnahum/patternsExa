var Materia = (function () {
    function Materia(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
    return Materia;
})();

module.exports = function (nombre, calificacion){
    return new Materia (nombre, calificacion);
}; 