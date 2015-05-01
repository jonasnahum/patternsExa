var Printer = (function() {

    var Printer = function(dependency) {
        this.dependency = dependency;
    };

    Printer.prototype.print = function(text) {
        this.dependency.log(text);
    };

    return Printer;
})();

module.exports = function(dependency) {
    return new Printer(dependency);
}