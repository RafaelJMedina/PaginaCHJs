// Crear funcion

/*
function sumarNumeros() {
  // Bloque de codigo que se va a ejecutar
  let numero1 = parseInt(prompt("Ingresa un primer numero"));
  let numero2 = parseInt(prompt("Ingresa un segundo numero"));
  let resultado = numero1 + numero2;
  alert(`El resultado de tu suma es ${resultado}`);
}

// llamar una funcion

sumarNumeros();
*/

// Con parametros

/*
function sumarConParams(num1, num2) {
    let resultado = num1 + num2;
    alert(`El resultado de tu suma es ${resultado}`);
}

let num1 = parseInt(prompt('Ingresa un primer numero'));
let num2 = parseInt(prompt('Ingresa un segundo numero'));

sumarConParams(num1,num2);
*/

// ejemplo 2

/*
function saludarUsuario(x) {
    alert(`Hola ${x} bienvenido al curso de Js`)
}

let usuario = prompt('Ingresa tu Nombre')
saludarUsuario(usuario)
*/

// Funcion con retorno

/*
function sumaConRetorno(p1,p2) {
    let resultado = p1 + p2
    return resultado
}

let num1 = parseInt(prompt('Ingresa un primer numero'));
let num2 = parseInt(prompt('Ingresa un segundo numero'));

let resultadoSuma = sumaConRetorno(num1,num2)
console.log(resultadoSuma);
alert(`El resultado de tu suma es ${resultadoSuma}`)
*/

// Calculadora

/*
function suma(p1, p2) {
  let = p1 + p2;
  return let;
}

function resta(p1, p2) {
  let = p1 - p2;
  return let;
}

function mult(p1, p2) {
  let = p1 * p2;
  return let;
}

function div(p1, p2) {
  let = p1 / p2;
  return let;
}

function calculadora(p1, p2, operacion) {
  let resultado;
  if (operacion === "suma") {
    resultado = suma(p1, p2);
  } else if (operacion === "resta") {
    resultado = resta(p1, p2);
  } else if (operacion === "mult") {
    resultado = mult(p1, p2);
  } else if (operacion === "div") {
    resultado = div(p1, p2);
  }
  return resultado;
}

let numero1 = parseInt(prompt("Ingresa un primer numero"));
let numero2 = parseInt(prompt("Ingresa un segundo numero"));
let oper = prompt("Que operacion deseas realizar? suma - resta - mult - div");

const resultCalculadora = calculadora(numero1, numero2, oper);
alert(`El resultado de tu operacion es ${resultCalculadora}`);
*/

// VARIABLE GLOBAL Y SCOPE
/*
let variableGlobal = 10
{
    console.log('variableGlobal',variableGlobal);
    let variable2 = 15
    console.log('variable2',variable2);
}

//console.log('fuera vairable',variable2);
console.log('Fuera variableGlobal',variableGlobal);
*/

// FUNCION ANONIMA
/*
let suma = function (p1,p2) {
    let resultado = p1+p2
    return resultado
}

let resultadoSuma = suma(1,2)
alert(`El resultado es ${resultadoSuma}`)
*/

// FUNCION FLECHA 
/*
const suma =(p1,p2) => {
    let resultado = p1 + p2
    return resultado
}

let resultadoSuma = suma(1, 2)
alert(`El resultado es ${resultadoSuma}`)
*/

