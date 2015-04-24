//An iterator is a pattern that
//provides a simple method to select, sequentially, the next item in a collection.
//The interface for the iterator looks like the following code:
//interface Iterator{
//next();
//}

//The following code keeps track of a pointer to the current element in the iteration:
var KingSuccession = (function () {
    function KingSuccession(inLineForThrone) {
        this.inLineForThrone = inLineForThrone;
        this.pointer = 0;
    }
    KingSuccession.prototype.next = function () {
        return this.inLineForThrone[this.pointer++];
    };
    return KingSuccession;
})();

//This is primed with an array and then we can call it with the following code:
var king = new KingSuccession(["Robert Baratheon","JofferyBaratheon", "TommenBaratheon"]);
king.next() //'Robert Baratheon'
king.next() //'JofferyBaratheon'
king.next() //'TommenBaratheon'