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
          html.tipo = tipo;
          html.mostrar = function(){
               const elementos = document.createElement(this.tipo);
               if(this.tipo === 'input'){
                    elementos.setAttribute('placeholder', this.texto );
               }else if(this.tipo === 'img'){
                    elementos.setAttribute('src', this.texto );
               }else{
                    elementos.appendChild(document.createTextNode(this.texto));
               }
               document.querySelector('#app').appendChild(elementos);
          }
          return html;
     }
}
const InputHTML = function(texto){
     this.texto = texto;
}
const ImagenHTML = function(texto){
     this.texto = texto;
}
const HeadingHTML = function(texto){
     this.texto = texto;
}
const ParrafoHTML = function(texto){
     this.texto = texto;
}
const sitioWeb = new ConstructorSitings();
//almacenar los elementos
const elementosWEB = [];
elementosWEB.push(sitioWeb.crearElemento('Bienvenido', 'h1'));
elementosWEB.push(sitioWeb.crearElemento('Bienvenidos a mi nuevo sitio web', 'p'));
elementosWEB.push(sitioWeb.crearElemento('Logo.svg', 'img'));
elementosWEB.push(sitioWeb.crearElemento('Contacto', 'input'));
elementosWEB.push(sitioWeb.crearElemento('Contacto en el formulario', 'h1'));

elementosWEB.forEach((elemento)=>{
     elemento.mostrar();
});