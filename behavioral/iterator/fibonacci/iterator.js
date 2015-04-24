var FibonacciIterator = (function () {
    function FibonacciIterator() {
        this.previous = 1;
        this.beforePrevious = 1;
    }
FibonacciIterator.prototype.next = function () {
    var current = this.previous + this.beforePrevious;
    this.beforePrevious = this.previous;
    this.previous = current;
    return current;
    };
    return FibonacciIterator;
})();

module.exports = function (){
    return new FibonacciIterator ();
}; 

