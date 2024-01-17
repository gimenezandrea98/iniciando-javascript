// Solicitar al usuario que ingrese el primer cateto
var cateto1 = parseFloat(prompt("Ingresa el valor del primer cateto:"));

// Solicitar al usuario que ingrese el segundo cateto
var cateto2 = parseFloat(prompt("Ingresa el valor del segundo cateto:"));

// Calcular la hipotenusa usando la fórmula de Pitágoras
var hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

// Mostrar el resultado al usuario
alert("La hipotenusa es: " + hipotenusa);
console.log(La hipotenusa es: ${hipotenusa})