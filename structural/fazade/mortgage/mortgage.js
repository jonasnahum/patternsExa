var bankFactory = require ("./bank");
var creditFactory = require ("./credit");
var backgroundFactory = require ("./background");
bank = bankFactory();
credit = creditFactory();
background = backgroundFactory();

var Mortgage = (function () {
    function Mortgage(name) {
        this.name = name;
    }
     
    Mortgage.prototype.applyFor = function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!bank.verify(this.name, amount)) {
            result = "denied";
        } else if (!credit.get(this.name)) {
            result = "denied";
        } else if (!background.check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
        " for a " + amount + " mortgage";
    }
    return Mortgage;
})();

module.exports = function (name){
    return new Mortgage (name);
}; 



    
     