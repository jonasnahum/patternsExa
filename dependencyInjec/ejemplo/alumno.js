var Alumno = (function() {

    var Alumno = function(nombre, apellido, promedio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
    };

    Alumno.prototype.print = function() {
        console.log (this.nombre + this.apellido + "tiene promedio de " +this.promedio);
    };

    return Alumno;
})();

module.exports = function(nombre, apellido, promedio) {
    return new Alumno(nombre, apellido, promedio);
}