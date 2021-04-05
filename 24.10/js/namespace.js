const restaurarApp = [];

restaurarApp.platillos = [
     {
          platillo: 'Pizza',
          precio: 25
     },
     {
          platillo: 'Hamburguesa',
          precio: 30
     },
     {
          platillo: 'Tacos',
          precio: 40
     },
]

//funciones
restaurarApp.funciones = {
     ordenar: id => {
     console.log(`Tu platillo: ${restaurarApp.platillos[id].platillo} se esta preparando`)
     },
     agregarPlatillo:(platillo, precio) =>{
          const nuevo = {
               platillo,
               precio
          }
         restaurarApp.platillos.push(nuevo);
     },
     MostrarMenu: platillos =>{
          console.log(`Bienvenido a nuestro menu: `)
          platillos.forEach((platillo, index) => {
               console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)
          });
     }

}

const {platillos} = restaurarApp
restaurarApp.funciones.MostrarMenu(platillos);
restaurarApp.funciones.ordenar(0);
restaurarApp.funciones.agregarPlatillo('Hot Dog', 5);
restaurarApp.funciones.MostrarMenu(platillos);
restaurarApp.funciones.ordenar(2);