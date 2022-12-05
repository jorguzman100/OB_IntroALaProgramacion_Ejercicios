console.log('***** Tema 3 *****');

// Crear una función con tres parámetros que sean números que se suman entre sí.
function sumaTres(a, b, c) {
    return a + b + c;
}

// Llamar a la función en el main y darle valores.
console.log(`sumaTres(1, 2, 3) = ${sumaTres(1, 2, 3)}`);

// Crear una clase coche.
class Coche {
    // Una variable numérica que almacene el número de puertas que tiene.
    constructor(puertas) {
        this.puertas = puertas;
    }

    incrementarPuertas() {
        this.puertas++
    }
}

// Crear un objeto miCoche en el main y añadirle una puerta.
let miCoche = new Coche(4);
miCoche.incrementarPuertas();

// Mostrar el número de puertas que tiene el objeto.
console.log(`miCoche tiene ${miCoche.puertas} puertas.`);