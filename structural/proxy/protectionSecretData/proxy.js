var Usuario = (function () {
    function Usuario(usuario) {
        this.nombre = usuario.nombre;
        this.email = usuario.email;
        this.contraseña = "no se puede mostrar la contraseña de usuario. esta protegida";//asi se protege la contraseña que trae el usuario.
    }
    return Usuario;
    
})();

module.exports = function (usuario){
    return new Usuario (usuario);
}; 
