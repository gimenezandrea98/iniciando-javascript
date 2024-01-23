let arrDefiguras = ["circulo", "triangulo", "rectangulo", "pentagono"];
console.log(arrDefiguras);


/*Splice recibe varios argumentos en la 
posicion 2 va a poner cuadrado y trapezoide y el 0 significa
que va a reemplazar lo que estaba 
"circulo", "triangulo", <---"cuadrado", "trapezoide"---> "rectangulo", "pentagono"
*/

arrDefiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrDefiguras);

// el experimento de traer solamente
// "circulo", "triangulo" y "cuadrado"

//debugger;
//const cortadito_1 = arrDefiguras.splice(0,2);
//const cortadito_2 = arrDefiguras[0];
//const mezclar = cortadito_1.concat(cortadito_2);
//debugger;


//borrar elementos
arrDefiguras.splice(2,3,"rombo")
console.log(arrDefiguras);