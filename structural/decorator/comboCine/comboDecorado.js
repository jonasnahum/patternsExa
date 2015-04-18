var ComboD = (function () {
    function ComboD(comboBase) {
        this.comboBase = comboBase;
    }
    ComboD.prototype.getCombo = function () {
        this.comboBase.hamburguesa.carnes = this.comboBase.hamburguesa.carnes * 2 ;
        this.comboBase.refresco.ml = this.comboBase.refresco.ml * 1.5;
        this.comboBase.papas.gramos = this.comboBase.papas.gramos * 1.5
        return this.comboBase.getCombo();
    };

    return ComboD;
})();

module.exports = function (comboBase){
    return new ComboD(comboBase);
};
