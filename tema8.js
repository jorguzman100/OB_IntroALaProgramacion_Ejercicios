/* 
Para practicar la encapsulación:

Crear clase Persona.

Crear variables las privadas edad, nombre y telefono de la clase Persona.

Crear gets y sets de cada propiedad.

Crear un objeto persona en el main.

Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
*/

// Crear clase Persona

class Persona {
    // Crear variables las privadas edad, nombre y telefono de la clase Persona
    constructor(edad, nombre, telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    // Crear gets y sets de cada propiedad
    get hobby() {
        return this._hobby;
    }

    set hobby(hobby) {
        this._hobby = hobby;
    }

    get favoriteCharacter() {
        return this._favoriteCharacter;
    }

    set favoriteCharacter(favoriteCharacter) {
        this._favoriteCharacter = favoriteCharacter
    }

}

// Crear un objeto persona en el main
const persona = new Persona(7, 'Alex', '37212345678910');

console.log(persona);
persona.hobby = 'Run';
console.log(persona.hobby);
persona.favoriteCharacter = 'Sonic';
console.log(persona.favoriteCharacter);