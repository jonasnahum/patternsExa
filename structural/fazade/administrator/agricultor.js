var Agricultor = (function () {
    function Agricultor() {}
     
    Agricultor.prototype.sembrar = function(name) {
        console.log ("El señor " + name + " esta sembrando");
    }
    return Agricultor;
})();

module.exports = function (){
    return new Agricultor ();
}; 


