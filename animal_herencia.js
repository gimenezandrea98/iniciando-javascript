class Animal {
    #patas = 4;
    constructor(patas) {
        this.#patas = patas;
    }
}

class Mamifero extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Pez extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Reptil extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Ave extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

debugger
//creacion de instancias
const pez = new Pez(0);
console.log(pez.patas);
const mam = new Mamifero(2);
console.log(mam.patas);