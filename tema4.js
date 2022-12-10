// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
// Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
console.log('***** Tema 4 *****');
const numPosNegCero = (numeroIf) => {
    let tipoNum = '';
    numeroIf > 0 ? tipoNum = 'positivo' : numeroIf < 0 ? tipoNum = 'negativo' : tipoNum = '0';
    return tipoNum;
}
console.log(numPosNegCero(0));


// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
// Incrementar el valor de la variable en uno cada vez que se ejecute.
// Mostrarlo por pantalla cada vez que se ejecute.

const bucleWhile = () => {
    let numeroWhile = 0;
    while (numeroWhile < 3) {
        console.log(`numeroWhile = ${numeroWhile}`);
        numeroWhile++;
    }
}
bucleWhile();


// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
const bucleDoWhile = () => {
    let numeroDoWhile = 0;
    do {
        console.log(`numeroDoWhile = ${numeroDoWhile}`);
        numeroDoWhile++;
    } while (numeroDoWhile < 0);
}
bucleDoWhile();


// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
const bucleFor = () => {
    for (let numeroFor = 0; numeroFor < 3; numeroFor++) {
        console.log(`numeroFor = ${numeroFor}`);
    }
}
bucleFor();

// Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
const bucleSwitch = (estacion) => {
    let estacionString = '';
    switch (estacion) {
        case 1:
            estacionString = 'Primavera';
            break;
        case 2:
            estacionString = 'Verano';
            break;
        case 3:
            estacionString = 'Otoño';
            break;
        case 4:
            estacionString = 'Invierno';
            break;
        default:
            estacionString = 'La variable no sea una estación';
    }
    console.log(`La estación indicada es ${estacionString}`);
}
bucleSwitch(1);
bucleSwitch(2);
bucleSwitch(3);
bucleSwitch(4);
bucleSwitch(5);
