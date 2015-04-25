var Libreta = (function () {//este es el memento.
    function Libreta(apuntes) {
        this.apuntes = apuntes;
    }
return Libreta;
})();

module.exports = function (apuntes){
    return new Libreta (apuntes);
}; 
