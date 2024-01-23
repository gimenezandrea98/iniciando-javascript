let arrDefiguras = ["circulo", "triangulo", "rectangulo", "pentagono"];
console.log(arrDefiguras);


/*Splice recibe varios argumentos en la 
posicion 2 va a poner cuadrado y trapezoide y el 0 significa
que va a reemplazar lo que estaba 
"circulo", "triangulo", <---"cuadrado", "trapezoide"---> "rectangulo", "pentagono"
*/

arrDefiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrDefiguras);

//borrar elementos
arrDefiguras.splice(2,4,"rombo")
console.log(arrDefiguras);