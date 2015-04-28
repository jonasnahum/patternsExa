var Reprobado = (function () {
    function Reprobado() {
        this.alumno;
    }
    Reprobado.prototype.avanzarGrado= function (alumno) {
        this.alumno = alumno;
        this.alumno.grado = this.alumno.grado;
    };
    return Reprobado;
})();

module.exports = function (){
    return new Reprobado ();
}; 
