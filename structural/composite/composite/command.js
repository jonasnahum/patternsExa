var Command = (function () {
    function Command(texto) {
        this.texto = texto;
    }
    Command.prototype.ejecutar = function (){
        console.log(this.texto);
    };
    return Command;
})();

module.exports = function (command){
    return new Command (command);
}; 