var DatosPersonales = (function () {
    function DatosPersonales(nombre, alturaMts, pesoKg, edad, sexo) { 
        this.nombre = nombre;
        this.altura = alturaMts;
        this.peso = pesoKg;
        this.edad = edad;
        this.sexo = sexo;
    }
    
    return DatosPersonales;
    
})();

module.exports = function (nombre, alturaMts, pesoKg, edad, sexo, imc){
    return new DatosPersonales (nombre, alturaMts, pesoKg, edad, sexo, imc);
}; 

