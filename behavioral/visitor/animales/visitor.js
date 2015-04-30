var AsustadorVisitor = (function () {
    function AsustadorVisitor() {
    }
    AsustadorVisitor.prototype.visit = function(animal) {
        if (animal._type == "Gallina" || animal._type == "Paloma") {
            this.acercarseCaminando(animal);
        } else {
            console.log("no se asusta solo con acercarse.");
        }
    };
    AsustadorVisitor.prototype.acercarseCaminando = function (animal) {
        animal.huir();
    };
    return AsustadorVisitor;
})();

module.exports = function (){
    return new AsustadorVisitor ();
}; 