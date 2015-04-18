var ComboBase = (function () {
    function ComboBase(hamburguesa, refresco, papas) {
        this.hamburguesa = hamburguesa;
        this.refresco = refresco;
        this.papas = papas;
    }
    ComboBase.prototype.getCombo = function () {
        var objCombo = {
                            hamburguesa: this.hamburguesa,
                            refresco: this.refresco,
                            papas: this.papas
                       };
        return objCombo;
    };
    return ComboBase;
})();

module.exports = function (hamburguesa, refresco, papas){
    return new ComboBase(hamburguesa, refresco, papas);
};
