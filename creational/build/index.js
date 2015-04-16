
var directorFactory = require ("./tallerDirector");
var tsuruFactory = require ("./tsuruBuilder");
var camionetaFactory = require ("./camionetaBuilder");


    var director = directorFactory ();

    var afinacionTsuru = director.build(tsuruFactory({bujia:10,
                                                      aire:10,
                                                      gasolina:10,
                                                      aceite: 10  
                                                     }));
    var afinacionCamioneta = director.build(camionetaFactory({bujia:20,
                                                      aire:20,
                                                      gasolina:20,
                                                      aceite:20  
                                                     }));
    var totalTsuru = afinacionTsuru.obtenerPresupuesto();
    var totalCamioneta = afinacionCamioneta.obtenerPresupuesto();
    
    console.log(totalTsuru);
    console.log(totalCamioneta);

