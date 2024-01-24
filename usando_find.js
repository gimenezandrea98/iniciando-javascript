//definiendo la funcion
//funciones normales
function decirHola(){
    //aqui dentro vas a escribir
    //las sentencias de tu programa o algoritmo
    console.log("Hola");
}


function otraFuncion(){
    alert("Soy una alerta")
}

//lo que está dentro del paréntesis se llama parámetro
//y es por defecto
function decirNombre(nombre="") {
    console.log(`El nombre ingresado es ${nombre}`);
}

function dameElNombreDeMiMascotaNormal(nombre) {
    return nombre;
}

// Esto se llama funcion flecha, la flechita es el return
const dameElNombreDeMiMascota = (nombre) => nombre;

//funciones anónimas
const recibiendoFuncionAnonima = function(){console.log("Soy una funcion anónima")};

//invovo, llamo, call
decirHola();
otraFuncion();
recibiendoFuncionAnonima();
//lo que está dentro del paréntesis es un argumento
decirNombre("Andrea");
const nombredemascota = dameElNombreDeMiMascotaNormal("firulais");