const alumnos = {
     //todos los alumnos
     ListaAlumnos : [],

     //obtener un alumno
     get: function(id){
          console.log(id);
          return this.ListaAlumnos[id];
     },

     //crear un alumno
     crear: function(datos){
          console.log(datos);
          this.ListaAlumnos.push(datos);
     },

     //listar todos los alumnos
     listado: function(){
          return this.ListaAlumnos
     }
}
const infoAlumno ={
     nombre: 'Paco',
     edad: 100,
}
const infoAlumno2 ={
     nombre: 'Manuel',
     edad: 30,
}
alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);
const listado = alumnos.listado();
const alumno = alumnos.get(1);
console.log(alumno);