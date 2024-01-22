//Calculadora IMC
const peso = prompt("Ingrese su peso en Kg:");
const altura = prompt("Ingrese su altura en metros:");

const imc = peso / (altura * altura);

console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);