var Menu = (function () {
    function Menu(nombre, command) {
        this.command = command || null;
        this.nombre = nombre;
        this.subMenus = new Array ();
        
    }
    Menu.prototype.agregarSubMenu = function (menu){
        this.subMenus.push(menu);
    };
    Menu.prototype.ejecutarComando = function (){
        this.command.ejecutar();
    };
    return Menu;
})();

module.exports = function (nombre, command){
    return new Menu (nombre, command);
}; 