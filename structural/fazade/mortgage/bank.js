var Bank = (function () {
    function Bank() {}
     
    Bank.prototype.verify = function(name, amount) {
        // complex logic ...
            return true;
    }
    return Bank;
})();

module.exports = function (){
    return new Bank ();
}; 


