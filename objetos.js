// animal1
/*
const tipoAnimal1= 'perro'; 
const nombreAnimal1 = 'Firulais';
const edadAnimal1 = 4;
*/
// animal2
/*
const tipoAnimal2 = 'gato'; 
const nombreAnimal2 = 'Mishu';
const edadAnimal2 = 5;
*/
// objeto animal1 se da valor con : y para seguir se una propiedad a otra con ','
/*
const animal1Obj = {
    tipo: 'perro',
    nombre: 'Firulais',
    edad: 4,
}; 
*/
// objeto animal2
/*
const animal2Obj = {
    tipo: 'gato',
    nombre: 'Mishu',
    edad: 5,
};
*/

//console.log(animal1Obj);

// Llamar propiedad en particular de un objeto
/* 
//1.metodo
console.log(animal1Obj.edad);
console.log(animal1Obj.nombre);

//2.metodo
console.log(animal1Obj['edad']);
console.log(animal1Obj['nombre']);

console.log(
    `Tengo dos objetos aninmales, uno es un ${animal1Obj.tipo} y el otro es un ${animal2Obj.top}`
);
*/

// quiero añadir una propiedad a animal1
/*
 animal1Obj.esAdoptado = true
 animal1Obj ['color'] = 'blanco'
 console.log(animal1Obj); 

*/

// modificar propiedades de un objeto
/*
animal2Obj.nombre = 'Petruska'
console.log(animal2Obj);
*/

// eliminar una propiedad de animal1
/*
delete animal1Obj.color
console.log(animal1Obj);
*/

// Crear Funcion Constructora = Crear objetos con las mismas propiedades
/*
function Animal(tipo,nombre,edad){
    //La funcion constructora comienza con mayuscula 'A'nimal y usa el concepto 'this'
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
}

const animal3Obj = new Animal('gallina','turuleca',2)
const animal4Obj = new Animal('raton','perez',10)
console.log(animal3Obj);
console.log(animal4Obj);
*/

// ejercicio 1
/*
function NuevoUsuario(nombre, email, password) {
  this.nombre = nombre;
  this.email = email;
  this.password = password;
  this.tieneEmail = function () {
    if (this.email) {
      return true;
    } else {
      return false;
    }
  };
}

const usuario1 = new NuevoUsuario("Facundo", "facundo@gmail.com", "123456");
const usuario2 = new NuevoUsuario("Jaider", "jaider@gmail.com", "abcde");
const usuario3 = new NuevoUsuario("Alan", null, "123abc");

console.log(usuario1, usuario2, usuario3);
*/

// METODO Meter funciones normales dentro de funciones constructoras
/*
function tieneEmail(user) {
    if (user.email) {
        return true
    } else {
        return false
    }   
}

console.log(usuario1.tieneEmail());
console.log(usuario2.tieneEmail());
console.log(usuario3.tieneEmail());
*/

// CLASES
/*
class Animal {
  constructor(tipo, nombre, edad) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad = edad;
  }
}

const animal5Obj = new Animal("pajaro", "carpintero", 8);
console.log(animal5Obj);

class NuevoUsuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
  tieneEmail() {
    if (this.email) {
      return true;
    } else {
      return false;
    }
  }
}

const usuario4 = new NuevoUsuario('Fatima', 'fatima@gmail', '123abc');
console.log(usuario4);
*/

// Como saber las propiedades 
/*
console.log(Object.keys(usuario4));
// Para recorrer todas las propiedades uso forin
for (const prop in usuario4) {
    console.log(`El valor del ${prop} es ${usuario4[prop]}`);
}
*/
