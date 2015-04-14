//it allows classes to defer the selection
//of the implementation of an instantiation to another class.

//Products.
var WateryGod = (function () {
    function WateryGod() {
    }
    WateryGod.prototype.prayTo = function () {
    };
    return WateryGod;
})();
Religion.WateryGod = WateryGod;

var AncientGods = (function () {
    function AncientGods() {
    }
    AncientGods.prototype.prayTo = function () {
    };
    return AncientGods;
})();
Religion.AncientGods = AncientGods;

var DefaultGod = (function () {
    function DefaultGod() {
    }
    DefaultGod.prototype.prayTo = function () {
    };
    return DefaultGod;
})();
Religion.DefaultGod = DefaultGod;

//Factory that is responsible for constructing each of the different gods, as
//shown in the following code:

var GodFactory = (function () {
    function GodFactory() {
    }
    GodFactory.Build = function (godName) {
        if (godName === "watery")
            return new WateryGod();
        if (godName === "ancient")
            return new AncientGods();
        return new DefaultGod();
    };
    return GodFactory;
})();

//Client. how to call the factory, uses the interfase prayTo() that also have the products.
var Prayer = (function () {
    function Prayer() {
    }
    Prayer.prototype.pray = function (godName) {
        GodFactory.Build(godName).prayTo();
    };
    return Prayer;
})();
