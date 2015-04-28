var Alumno = (function () {
    function Alumno(currentState, grado, promedio) {
        this.currentState = currentState;
        this.grado = grado;
        this.promedio = promedio;
    }

    Alumno.prototype.cambiarEstado = function (nuevoEstado) {
        this.currentState = nuevoEstado;
    };
    Alumno.prototype.avanzarGrado = function () {
        return this.currentState.avanzarGrado(this);
    };
    return Alumno;
})();

module.exports = function (currentState, grado, promedio){
    return new Alumno (currentState, grado, promedio);
}; 
