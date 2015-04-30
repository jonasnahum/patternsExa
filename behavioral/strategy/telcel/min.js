var Min = (function () {
    function Min(){}
    Min.prototype.cobrar = function (minutos){
        var segundos = minutos * 60;
        return segundos * 0.01;
    };
    return Min;
})();

module.exports = function (){
    return new Min ();
}; 
