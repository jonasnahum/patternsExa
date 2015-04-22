var Profesor = (function () {
    function Profesor() {}
     
    Profesor.prototype.enseñar = function(name) {
        console.log ("El señor " + name + " esta enseñando a los alumnos");
    }
    return Profesor;
})();

module.exports = function (){
    return new Profesor ();
}; 

