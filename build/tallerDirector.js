var tsuruFactory = require ("./tsuruBuilder");
var afinacionFactory = require ("./afinacion.js");

var TallerDirector = (function (){ 
    function TallerDirector() {
    }
    TallerDirector.prototype.build = function (builder) {
        return builder.build();
    };
    return TallerDirector;
})();

module.exports = function (){
    return new TallerDirector ();
}; 



