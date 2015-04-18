//The decorator pattern is used to wrap and augment an existing class.
var BasicArmor = (function () {
    function BasicArmor() {
    }
    BasicArmor.prototype.CalculateDamageFromHit = function (hit) {
        return 1;
    };
    BasicArmor.prototype.GetArmorIntegrity = function () {
        return 1;
    };
    return BasicArmor;
})();

var ChainMail = (function () {
    function ChainMail(decoratedArmor) {//decorador que envuelve al decorado, el decorado es la                                             clase base cuando llega aquí ambos tienen que ser clases                                            similares.con la misma interfase.
        this.decoratedArmor = decoratedArmor;
    }
    ChainMail.prototype.CalculateDamageFromHit = function (hit) {//modifies the arguments that are //passed into the decorated class
        hit.Strength = hit.Strength * .8;
        return this.decoratedArmor.CalculateDamageFromHit(hit);
    };
    ChainMail.prototype.GetArmorIntegrity = function () {//modifies the result from the underlying //class
        return .9 * this.decoratedArmor.GetArmorIntegrity();
    };
    return ChainMail;
})();

//The ChainMail armor takes in an instance of armor that complies with an interface,
//like the following code:
export interface IArmor{
    CalculateDamageFromHit(hit: Hit):number;
    GetArmorIntegrity():number;
}

//That instance is wrapped and calls proxied through. The GetArmorIntegiry method
//modifies the result from the underlying class, while the CalculateDamageFromHit
//method modifies the arguments that are passed into the decorated class. This
//ChainMail class could, itself, be decorated with several more layers of decorators,
//until a long chain of methods is actually called for each method call. This behavior,
//of course, remains invisible to outside callers.
//To make use of this armor, you simply use the following code:
var armor = new ChainMail(new BasicArmor());//objejto = objDecorated(objDecorator)
    console.log(armor.CalculateDamageFromHit({Location: "head",
    Weapon: "Sock filled with pennies", Strength: 12}));