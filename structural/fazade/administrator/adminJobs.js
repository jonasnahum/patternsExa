var Admin = (function () {
    function Admin(agricultor, chofer, maestro) {
        this. agricultor = agricultor;
        this.chofer = chofer;
        this.maestro = maestro;
    }
     
    Admin.prototype.trabajar = function(name, verbo) {
        if (verbo === "sembrar") {
            return this.agricultor.sembrar(name);
        } else if (verbo === "enseñar") {
            return this.maestro.enseñar(name);
        } else if (verbo === "manejar") {
            return this.chofer.manejar(name);
        }
    }
    return Admin;
})();

module.exports = function (agricultor, chofer, maestro){
    return new Admin (agricultor, chofer, maestro);
}; 



    
     