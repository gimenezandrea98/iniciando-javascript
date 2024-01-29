//la encapsilacion
class Groot{
    constructor(fechaDeAparicion){
        //atributo o propiedad publica
        this.fechaDeAparicion = fechaDeAparicion
    }
    //para que sea privado usar #
    succionarMadera(){}
}

//crear la instancia 
let grootcito = new Groot ("13-NOV-1960");
console.log(grootcito.edad)
let grootJoven = new Groot ("29-ENE-2024");
grootJoven.edad = 10;