var Iterador = (function () {
    function Iterador(array) {
        this.array = array;
        this.index = 0;
    }
    Iterador.prototype.next = function () {
        return this.array[this.index++];
    };
return Iterador;
})();

module.exports = function (array){
    return new Iterador (array);
}; 

