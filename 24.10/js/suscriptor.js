let observer = {
     obtenerOfertas: function(callback){
          if(typeof callback === "function"){
               this.suscribers[this.suscribers.length] = callback;
          }
     },
     cancelarOfertas: function(callback){
          for(let i = 0; i < this.suscribers.length; i++ ){
               if(this.suscribers[i] === callback){
                    delete this.suscribers[i];
               }
          }
     },
     publicarOferta: function(oferta){
          for(let i = 0; i < this.suscribers.length; i++ ){
               if(typeof this.suscribers[i] === 'function'){
                    this.suscribers[i](oferta);
               }
          }
     },
     crear: function(objeto){
          for(let i in this){
               objeto[i] = this[i];
               objeto.suscribers = [];
          }
     }
}

const udemy = {
     nuevoCurso: function(){
          const curso = 'Un nuevo curso de JavaScript!!';
          this.publicarOferta(curso)
     }
}
const facebook = {
     nuevoAnuncio: function(){
          const oferta = 'comprar un celular';
          this.publicarOferta(oferta);
     }
}
//crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

const juan = {
     compartir: function(oferta){
          console.log('Juan Dice Me interesa la oferta de ' + oferta);
     }
};

const karen = {
     interesa: function(oferta){
          console.log('Karen Dice Me intereza la oferta de ' + oferta)
     }
}
udemy.obtenerOfertas( juan.compartir);
udemy.obtenerOfertas( karen.interesa);
udemy.nuevoCurso()
udemy.cancelarOfertas(karen.interesa);
udemy.nuevoCurso()
facebook.obtenerOfertas(juan.compartir);
facebook.nuevoAnuncio();