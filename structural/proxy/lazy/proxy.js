var trianguloFactory = require ("./triangulo");

var Proxy = (function () {
    function Proxy(lado1,lado2,lado3) {
        this.triangulo = null;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }        
    
    Proxy.prototype.obtenerTriangulo = function() {
        if (this.triangulo == null)
            this.triangulo = trianguloFactory(this.lado1,this.lado2,this.lado3);
        
        return this.triangulo;
    }
     
    Proxy.prototype.calcularArea = function() {        
        return this.obtenerTriangulo().calcularArea();
    }
    Proxy.prototype.calcularPerimetro = function() {
        return this.obtenerTriangulo().calcularPerimetro();
    }
    
    return Proxy;
    
})();

module.exports = function (lado1,lado2,lado3){//le adiciona propiedades, ya que este la instancia
    var p =  new Proxy (lado1,lado2,lado3);//porque si las pongo arriba, triangulo será null.
    Object.defineProperty(p, 'base', {
      get: function() { 
          return p.obtenerTriangulo().base; 
      },
      set: function(newValue) { 
          p.obtenerTriangulo().base = newValue; 
      },
      enumerable: true,
      configurable: true
    });
    
    Object.defineProperty(p, 'altura', {
      get: function() { 
          return p.obtenerTriangulo().altura; 
      },
      set: function(newValue) { 
          p.obtenerTriangulo().altura = newValue; 
      },
      enumerable: true,
      configurable: true
    });
    
    return p;
}; 
