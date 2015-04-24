//The interpreter pattern is an interesting pattern as it allows for the creation of your
//own language.
var Battle = (function () {
    function Battle(battleGround, agressor, defender, victor) {
        this.battleGround = battleGround;
        this.agressor = agressor;
        this.defender = defender;
        this.victor = victor;
    }
    return Battle;
})();

//Next, we need a parser:
var Parser = (function () {
    function Parser(battleText) {
        this.battleText = battleText;
        this.currentIndex = 0;
        this.battleList = battleText.split("\n");
    }
    Parser.prototype.nextBattle = function () {
        if (!this.battleList[0])
            return null;
        var segments = this.battleList[0].match(/\((.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->\s?(.+)/);
    return new Battle(segments[2], segments[1], segments[3], segments[4]);
    };
    return Parser;
})();

//It is likely best that you don't think too much about that regular expression.
//However, the class does take in a list of battles (one per line) and using nextBattle
//allows one to parse them. To use the class, we simply need the following code:

var text = "(Robert Baratheon -> River Trident <-RhaegarTargaryen) -> Robert Baratheon)";
var p = new Parser(text);
p.nextBattle()

//Its output will be:
{ battleGround: 'River Trident',
agressor: 'Robert Baratheon',
defender: 'RhaegarTargaryen)',
victor: 'Robert Baratheon' }