var Chofer = (function () {
    function Chofer() {}
    Chofer.prototype.manejar = function(name) {
        console.log ("El señor " + name + " esta manejando");
    }
    return Chofer;
})();

module.exports = function (){
    return new Chofer ();
}; 

