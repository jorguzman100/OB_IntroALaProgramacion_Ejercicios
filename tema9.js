/* 
Crea una clase Persona con las siguientes variables:

La edad

El nombre

El teléfono

Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
*/


// Crea una clase Persona con las siguientes variables: La edad, El nombre, El teléfono
class Persona {
    constructor(edad, nombre, telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
}

// Crea una nueva clase Cliente que herede de Persona
// esta nueva clase tendrá la variable credito solo para esa clase.
class Cliente extends Persona {
    constructor(persona, credito) {
        super(persona.edad, persona.nombre, persona.telefono);
        this.credito = credito;
    }

    mostrarCredito() {
        console.log(`El credito de ${this.nombre} es: ${this.credito}`);
    }
}

// haz lo mismo con la clase Trabajador que herede de Persona, 
// y con una variable salario que solo tenga la clase Trabajador.
class Trabajador extends Cliente {
    constructor(cliente, salario) {
        super(cliente, cliente.credito);
        this.salario = salario;
    }

    mostrarSalario() {
        console.log(`El salario de ${this.nombre} es: ${this.salario}`);
    }
}
// Crea ahora un objeto de la clase Cliente que debe tener como propiedades 
// la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.
const persona1 = new Persona(25, 'Susana', '12312323434');
const persona2 = new Persona(20, 'Ana', '696969696969');
const cliente1 = new Cliente(persona1, 300000);
const cliente2 = new Cliente(persona2, 100000);
const trabajador1 = new Trabajador(cliente1, 'Premium');
const trabajador2 = new Trabajador(cliente2, 5000);

console.log(persona1);
console.log(cliente1);
console.log(trabajador1);
console.log(trabajador2);

persona1.saludar();
cliente2.saludar();
cliente1.mostrarCredito();
cliente2.mostrarCredito();
trabajador2.saludar();
trabajador2.mostrarCredito();
trabajador2.mostrarSalario();

