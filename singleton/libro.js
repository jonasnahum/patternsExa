var Westeros;
(function (Westeros) {
    var Wall = (function () {
            function Wall() {
            this.height = 0;
            if (Wall._instance)
                return Wall._instance;
            Wall._instance = this; //return the current instance from the constructor.
        }
        Wall.prototype.setHeight = function (height) {
            this.height = height;
        };
        Wall.prototype.getStatus = function () {
            console.log("Wall is " + this.height + " meters tall");
        };
        //we set a static variable, _instance , to be a new
        //instance of Wall when one is not already there. In the case that _instance already
        //exists, we return that.
        Wall.getInstance = function () {
            if (!Wall._instance) {
                Wall._instance = new Wall();
            }
            return Wall._instance;
        };
        Wall._instance = null;
        return Wall;
    })();
    Westeros.Wall = Wall;
})(Westeros || (Westeros = {}))