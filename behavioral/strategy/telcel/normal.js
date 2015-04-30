var Normal = (function () {
    function Normal(){}
    Normal.prototype.cobrar = function (minutos){
        return minutos * 1;
    };
    return Normal;
})();

module.exports = function (){
    return new Normal ();
}; 
