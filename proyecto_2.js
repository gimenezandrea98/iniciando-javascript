// Convertidor de millas a kilómetros
const millas = 130;
const conversionFactor = 1.60934;
const kilometros = millas * conversionFactor;
console.log(`La distancia de ${millas} millas es igual a ${kilometros.toFixed(4)} Km`);

// Calculadora IMC
const peso = prompt("Ingrese su peso en Kg:");
const altura = prompt("Ingrese su altura en metros:");
const imc = peso / (altura * altura);
console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);

// Preguntas
const c1 = "5";
console.log(typeof c1); // Respuesta: String

const c2 = 91;
console.log(typeof c2); // Respuesta: Number

let empty1 = undefined; //line 1
let empty2 = null; //line 2
// Respuesta: Ambos son utilizados para representar ausencia de valor, pero depende del contexto.

let a1 = "Hello";
a1 = "world";
console.log(a1); // Respuesta: world

let a2 = "world";
let b2 = `Hello ${a2}!`;
console.log(b2); // Respuesta: Hello world!

let a3 = "Hello";
a3 = prompt("world");
console.log(a3); // Respuesta: El valor que el usuario ingrese utilizando prompt

let a4 = 5;
let b4 = 70;
let c4 = "5";
b4++;
console.log(b4); // Respuesta: 71

let result = 3 + 4 * 2 / 8;
console.log(result); // Respuesta: 4

let firstNum2 = 5;
let secondNum2 = 10;
firstNum2++;
secondNum2--;
let total3 = ++firstNum2 + secondNum2;
console.log(total3); // Respuesta: 16

let total4 = 500 + 100 / 5 + total3--;
console.log(total4); // Respuesta: 136

const a5 = 5;
const b5 = 10;
console.log(a5 > 0 && b5 > 0); // Respuesta: true
console.log(a5 == 5 && b5 == 4); // Respuesta: false
console.log(true || false); // Respuesta: true
console.log(a5 == 3 || b5 == 10); // Respuesta: true
console.log(a5 == 3 || b5 == 7); // Respuesta: false