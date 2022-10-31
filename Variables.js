//Descartar problemas
//console.log('Mi primera consola')
//console.log('Segunda Consola')

//pedir informacion al usuario
//prompt('¿cual es tu edad?')

//dar informacion al usuario
//alert('Bienvenido a tu primera aplicación web')

//Declaraciones
// var - let - const

//let primeraVariable = prompt('Cual es tu nombre?')
//let segundaVariable =50
//const terceraVariable =10

//const resultado = segundaVariable/terceraVariable
//console.log(resultado)

//primeraVariable= 8
//segundaVariable= 10

//alert('Bienvenido '+primeraVariable+' como estas?')
//console.log(primeraVariable)

/*
let primerNum = parseInt(prompt('Ingresa un primer numero'))
let segundoNum = parseInt(prompt('Ingresa un segundo numero'))

const resultado = primerNum +segundoNum
alert('La suma de los numeros ingresados es: '+resultado)
console.log(resultado)
*/

/* 
CONDICIONAL

'si' '(mañana no llueve)' 'entonces' vamos a la playa

if('condicion') {
    console.log('la condicion se cumple')
}


if(numero2 == 6) {
    console.log('la condicion se cumple');
}

// 'si' '(mañana no llueve)' 'entonces' vamos a la playa 'sino' vamos
if(condicion){
    // bloque de codigo si la condicion se cumple
} else {
    // bloque de codigo si la condicion no se cumple
}


let numero1 = 5;
let numero2 = 6;

// ejemplo
if (numero2 == 6) {
    console.log("Numero igual a 6");
} else {
    console.log("Numero distinto de 6");
}

// ejemplo 2  .toLowerCase()=='alan' convierte todo a minuscula
const nombre = prompt("Ingresa tu nombre");
if (nombre == "Alan") {
    alert("Bienvenido Alan");
} else {
    alert("No eres bienvenido a esta cuenta");
}

*/

/* 
ANIDANDO IF - ELSE - ELSE IF

if (condicion) {
    //bloque de codigo si la condicion se cumple
} else if(condicion2){
    //bloque de codigo si la condicion se cumple
} else if(condicion3){
    //bloque de codigo si la condicion se cumple
} else {
    //bloque de codigo si ninguna condicion se cumple    
}
*/

/*
EJEMPLOS

//ejemplo 3
const nombre = prompt("Ingresa tu nombre");
if (nombre.toLowerCase() == "alan") {
  alert("Bienvenido Alan");
} else if (nombre.toLowerCase() == "facundo") {
  alert("Bienvenido Facundo");
} else if (nombre.toLowerCase() == "bernardo") {
  alert("Bienvenido Bernardo");
} else {
  alert("No eres bienvenido a esta cuenta");
}

// ejemplo 4
const profesion = prompt("Eres ingeniero o medico");
if (profesion == "medico") {
  valorHora = 10;
} else if (profesion == "ingeniero") {
  valorHora = 15;
} else {
  valorHora = 1;
}

alert("Hola, te vamos a pagar por hora " + valorHora);

// ejemplo 5
const seguirComprando = prompt("Quieres seguir comprando");
if (seguirComprando.toLowerCase() == "si") {
  alert("Escoge el siguiente producto");
} else {
  alert("Este es el total de tu compra");
}

// ejemplo calculador
const numero1 = parseInt(prompt("Ingresa un numero"));
const numero2 = parseInt(prompt("Ingresa un numero"));
const operacion = prompt("Que operacion quieres hacer? sum-rest-mult-div");
let resultado;
if (operacion == "sum") {
    resultado = numero1 + numero2;
} else if (operacion == "rest") {
    resultado = numero1 - numero2;
} else if (operacion == "mult") {
    resultado = numero1 * numero2;
} else {
    resultado = numero1 / numero2;
}
alert('El resultado de tu operacion '+resultado)
*/

// CICLOS EN JS FOR - WHILE - DO WHILE

/*
FOR

for (let i = 1;i<=10;i++){
console.log('saludar');
}


for(let i = inciocontador; i <= finalcontador; i++){
  alert(i)
}

const inciocontador = parseInt(prompt('Inicio contador?'))
const finalcontador = parseInt(prompt('Final contador?'))

for(let i= finalcontador; i>= inciocontador; i--){
  if(i===inciocontador){
    alert(i)
  }
}

WHILE
while (condition) {
  //bloque de codigo a ejecutar n numero de veces
}

let nombre = prompt('Ingresa tu nombre')

while (nombre!=='tomas') {
  alert('Bienvenido')
  nombre = prompt('Ingresa tu nombre')
}

let numero = parseInt(prompt('Ingresa un numero'))

while (numero<10 || numero >20){
  alert('no es el numero correcto')
  numero = parseInt(prompt('Ingresa un numero'))
}
alert(El numero ingresado es ${numero}) (REVISAR)

SENTENCIAS BREAK - CONTINUE TERMINAR DE REVISAR LA CLASE

let nombre = prompt('Ingresa tu nombre')
while (nombre!=='tomas') {
  if (nombre==='ricardo') {
    nombre
  }
}
*/


