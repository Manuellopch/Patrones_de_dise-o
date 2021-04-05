function ConstructorSitings(){
     this.crearElemento = function(texto, tipo){
          let html;
          if(tipo === 'input'){
               html = new InputHTML(texto);
          }else if(tipo === 'img'){
               html = new ImagenHTML(texto);
          }else if(tipo === 'h1'){
               html = new HeadingHTML(texto);
          }else if (tipo === 'p'){
               html = new ParrafoHTML(texto);
          }
          return html;
     }
}
const HeadingHTML = function(texto){
     this.texto = texto;
}
const sitioWeb = new ConstructorSitings();
//almacenar los elementos
const elementosWEB = [];
elementosWEB.push(sitioWeb.crearElemento('Bienvenido', 'h1'));
console.log(elementosWEB);