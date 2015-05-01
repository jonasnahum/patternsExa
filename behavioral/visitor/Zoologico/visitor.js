var VetVisitor = (function () {
    function VetVisitor() {
    }
    VetVisitor.prototype.visit = function(animal) {
        if (animal._type == "Gallina" || animal._type == "Paloma") {
            this.revisar(animal);
        } else {
            console.log("visitor: el chango es un mamifero, no contrae aviar");
        }
    };
    VetVisitor.prototype.revisar = function (animal) {
        animal.vacunar();
    };
    return VetVisitor;
})();

module.exports = function (){
    return new VetVisitor ();
}; 