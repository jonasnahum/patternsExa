//es para tener estados evitando los if, los estados son clases que tienen la misma interfaz y el manager da un resultado según el estado actual.

//The state pattern is characterized by having a state manager that abstracts
//away the internal state and proxies message through to the appropriate state that
//is implemented as a class.//All the logic within states and governing state transitions
//is governed by the individual state classes.
//Splitting state into a class per state allows for much smaller blocks of code to debug
//and makes testing much easier.

//Let's take a look at some of the code that is needed to manage a bank account at the
//Iron Bank of Braavos. First is the state manager:
var BankAccountManager = (function () {
    function BankAccountManager() {
        this.currentState = new GoodStandingState(this);//el manager se pasa a los estados.
    }
    BankAccountManager.prototype.Deposit = function (amount) {
        this.currentState.Deposit(amount);
    };
    BankAccountManager.prototype.Withdraw = function (amount) {
        this.currentState.Withdraw(amount);
    };
    BankAccountManager.prototype.addToBalance = function (amount) {
        this.balance += amount;
    };
    BankAccountManager.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccountManager.prototype.moveToState = function (newState) {//cambia de estado.
        this.currentState = newState;
    };
    return BankAccountManager;
})();

//We've identified three simple states for the bank account: overdrawn, on hold, and
//good standing. Each one is responsible to deal with withdrawals and deposits when
//in that state. The GoodStandingState class looks like the following code:
var GoodStandingState = (function () {
    function GoodStandingState(manager) {
        this.manager = manager;
    }
    GoodStandingState.prototype.Deposit = function (amount) {
        this.manager.addToBalance(amount);
    };
    GoodStandingState.prototype.Withdraw = function (amount) {
        if (this.manager.getBalance() < amount) {
            this.manager.moveToState(new OverdrawnState(this.manager));//cambia de estado.
        }
        this.manager.addToBalance(-1 * amount);//resta al balance.
    };
    return GoodStandingState;
})();

//The overdrawn state looks like the following code:
var OverdrawnState = (function () {
    function OverdrawnState(manager) {
        this.manager = manager;
    }
    OverdrawnState.prototype.Deposit = function (amount) {
        this.manager.addToBalance(amount);
        if (this.manager.getBalance() > 0) {
            this.manager.moveToState(new GoodStandingState(this.manager));//cambia estado.
        }
    };
    OverdrawnState.prototype.Withdraw = function (amount) {
        this.manager.moveToState(new OnHold(this.manager));//cambio de estado.
        throw "Cannot withdraw money from an already overdrawn bank account";
    };
    return OverdrawnState;
})();

//Finally, the OnHold state looks like the following code:
var OnHold = (function () {
    function OnHold(manager) {
        this.manager = manager;
    }
    OnHold.prototype.Deposit = function (amount) {
        this.manager.addToBalance(amount);
        throw "Your account is on hold and you must go to the bank to resolve the issue";
    };
    OnHold.prototype.Withdraw = function (amount) {
        throw "Your account is on hold and you must go to the bank to resolve the issue";
    };
return OnHold;
})();