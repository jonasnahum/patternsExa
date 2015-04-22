var Background = (function () {
    function Background() {}
     
    Background.prototype.check = function(name) {
        // complex logic ...
            return true;
    }
    return Background;
})();

module.exports = function (){
    return new Background ();
}; 


