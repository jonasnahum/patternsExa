var Refresco = (function () {
    function Refresco(ml) {
        this.ml = ml;
    }
    return Refresco;
})();

module.exports = function (ml){
    return new Refresco(ml);
};
