var Usuario = (function () {
    function Usuario(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
    return Usuario;
    
})();

module.exports = function (nombre, email, contraseña){
    return new Usuario (nombre, email, contraseña);
}; 
