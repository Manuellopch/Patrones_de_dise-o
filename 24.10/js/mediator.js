const Vendedor = function(nombre){
     this.nombre = nombre;
     this.sala = null;
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

const Subasta = function(){
     let compradores = [];
     return{
          registrar: function(usuario){
               compradores[usuario.nombre] = usuario;
               usuario.sala = this;
               console.log(compradores);
          }
     }
}
//instanciar los objetos
const Juan = new Comprador('Juan');
const Pablo = new Comprador('Pablo');
const Karen = new Comprador('karen');
const vendedor = new Vendedor('vendedor');
const subasta = new Subasta();
subasta.registrar(Juan);
subasta.registrar(Pablo);
subasta.registrar(Karen);
console.log(subasta);

vendedor.oferta('Mustang 1966', 3000);
Karen.oferta(3500, Karen);
vendedor.vendido(Karen.nombre);