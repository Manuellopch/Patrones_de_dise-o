class Formulario{
     constructor(){
          this.campos = []
     }
     agregarCampo(tipo, texto){
          let campos = this.campos;
          let campo;
          switch(tipo){
               case 'text':
                    campo = new InputText(texto); 
                    break;
               case 'email':
                    campo = new InputEmail(texto);
                    break;
               case 'button':
                    campo = new Boton(texto);
                    break;
               default:
                    throw new Error('Tipo no valido' + tipo);
          }
          campos.push(campo);
     }
     obtenerFormulario(){
          let form = document.createElement('form'),
          campos = this.campos.length,
          campo;
               for(let i = 0; i < campos; i++){
                    campo = this.campos[i];
                    form.appendChild(campo.crearElemento());
                    let br = document.createElement('br');
                    form.appendChild(br);
               } 
               return form;
     }
};
class Inputs{
     constructor(texto){
          this.texto = texto;
     }
}
class InputText extends Inputs{
     constructor(texto){
     super(texto);
     }
     crearElemento(){
          const InputText = document.createElement('input');
          InputText.setAttribute('type', 'text');
          InputText.setAttribute('placeholder', this.texto);
          return InputText;
     }
}
class InputEmail extends Inputs{
     constructor(texto){
     super(texto);
     }
     crearElemento(){
          const InputEmail = document.createElement('input');
          InputEmail.setAttribute('type', 'email');
          InputEmail.setAttribute('placeholder', this.texto);
          return InputEmail;
     }
}
class  Boton extends Inputs{
     constructor(texto){
     super(texto);
     }
     crearElemento(){
          const IBoton = document.createElement('button');
          IBoton.setAttribute('type', 'submit');
          IBoton.textContent = this.texto;
          return IBoton;
     }
}
//instanciar formulario
const formulario = new Formulario();
formulario.agregarCampo('text', 'Añade Tu Nombre');
formulario.agregarCampo('text', 'Añade Tu Apellido');
formulario.agregarCampo('email', 'Añade Tu Correo');
formulario.agregarCampo('button', 'Enviar Formulario');

//renderizar en el html
document.addEventListener('DOMContentLoaded', ()=>{
     document.querySelector('#app').appendChild(formulario.obtenerFormulario());
})
console.log(formulario);