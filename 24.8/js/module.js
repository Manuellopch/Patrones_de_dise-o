//Nefi 
//validaciones privadas y publicas
const comprarBoleto = (function(){
     //definido como lo privado
     let evento = 'Conferencia js 2019';
     const adquirirBoleto = () =>{
          const elemento = document.createElement('p');
          elemento.textContent = `Comprar Boletos en: ${evento}`;
          document.getElementById('app').appendChild(elemento);
     }
     return {
          mostrarBoleto: function(){
               adquirirBoleto()
          }
     }
})();

comprarBoleto.mostrarBoleto();
