var Aprobado = (function () {
    function Aprobado() {
        this.alumno;
    }
    Aprobado.prototype.avanzarGrado= function (alumno) {
        this.alumno = alumno;
        this.alumno.grado = this.alumno.grado + 1;
    };
    
    return Aprobado;
})();

module.exports = function (){
    return new Aprobado ();
}; 
