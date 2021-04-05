
//validaciones privadas y publicas

const comprarBoleto = (function(){

     //definido como lo privado
     let evento = 'Conferencia js 2019';
     let precio = 200;

     //definido como lo publico
     return {
          mostrarBoleto: function(){
               console.log(evento);
          }
     }
})();

comprarBoleto.mostrarBoleto();
