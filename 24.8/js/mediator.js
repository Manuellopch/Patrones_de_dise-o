const Vendedor = function(nombre){
     this.nombre = nombre;
}
const Comprador = function(nombre){
     this.nombre = nombre;
}
Vendedor.prototype = {
     oferta: function(articulo, precio){
          console.log(`Tenemos el siguiente Articulo ${articulo}, iniciamos en ${precio}`);
     },
     vendido: function(Comprador){
          console.log(`vendido a ${Comprador} (sonido de mazo)`);
     }
};

Comprador.prototype = {
     oferta: function(mensaje, Comprador){
          console.log(`${Comprador.nombre} : ${mensaje}`)
     }

}
