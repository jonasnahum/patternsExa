var menuFactory = require ("./menu");
var cmdFactory = require ("./command");

var menuGral = menuFactory("menuGeneral");

var menuFile = menuFactory("menuFile");
var menuEdit = menuFactory("menuEdit");

var nuevoCmd = cmdFactory("se ejecuto el comando nuevo");
var nuevo = menuFactory("nuevo", nuevoCmd);
var openCmd = cmdFactory("se ejecuto el comando open");
var open = menuFactory("open", openCmd);
var saveCmd = cmdFactory("se ejecuto el comando save");
var save = menuFactory("save", saveCmd);

var copyCmd = cmdFactory("se ejecuto el comando copy");
var copy =  menuFactory("copy", copyCmd);
var cutCmd = cmdFactory("se ejecuto el comando cut");
var cut =  menuFactory("cut", cutCmd);
var pasteCmd = cmdFactory("se ejecuto el comando paste");
var paste =  menuFactory("paste", pasteCmd);

menuGral.agregarSubMenu(menuFile);
menuGral.agregarSubMenu(menuEdit);

menuFile.agregarSubMenu(nuevo);
menuFile.agregarSubMenu(open);
menuFile.agregarSubMenu(save);

menuEdit.agregarSubMenu(copy);
menuEdit.agregarSubMenu(cut);
menuEdit.agregarSubMenu(paste);

var fRecursivaBuscar = function (menu, nombreABuscar){
    if(menu.nombre === nombreABuscar && menu.command){
        menu.ejecutarComando();
        return;
    }
    menu.subMenus.forEach(function(menu){
        fRecursivaBuscar(menu, nombreABuscar);
    });
};

//intercambiabilidad de los menus.. eso es el composite.
fRecursivaBuscar(menuGral, "copy"); 
fRecursivaBuscar(menuEdit, "copy"); 
fRecursivaBuscar(copy, "copy"); 
