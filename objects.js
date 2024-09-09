// Crear un objeto usando un iniciador de objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

// Usar el objeto
persona.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.

// Definir un constructor de objeto
function Coche(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.mostrarDetalles = function () {
        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    };
}

// Crear instancias de Coche
const coche1 = new Coche('Toyota', 'Corolla', 2020);
const coche2 = new Coche('Honda', 'Civic', 2021);

// Usar los objetos
coche1.mostrarDetalles(); // Salida: Coche: Toyota Corolla, Año: 2020
coche2.mostrarDetalles(); // Salida: Coche: Honda Civic, Año: 2021

// Definir un objeto prototipo
const animal = {
    tipo: 'animal',
    hacerSonido: function () {
        console.log('Hago un sonido');
    }
};

// Crear un nuevo objeto utilizando Object.create()
const perro = Object.create(animal);
perro.nombre = 'Rex';
perro.hacerSonido = function () {
    console.log('Guau! Mi nombre es ' + this.nombre);
};

// Usar el objeto
console.log(perro.tipo); // Salida: animal (heredado del prototipo)
perro.hacerSonido(); // Salida: Guau! Mi nombre es Rex