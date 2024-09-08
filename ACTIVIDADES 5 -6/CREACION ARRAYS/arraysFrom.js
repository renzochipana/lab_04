// Crear arrays utilizando el método Array.from()

// Array numérico
const numeros = Array.from([1, 2, 3, 4, 5]);

// Array de strings
const frutas = Array.from(['manzana', 'banana', 'naranja']);

// Array de objetos
const personas = Array.from([
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 35 }
]);

// Funciones para agregar datos a los arrays
function agregarNumero(num) {
    numeros.push(num);
}

function agregarFruta(fruta) {
    frutas.push(fruta);
}

function agregarPersona(nombre, edad) {
    personas.push({ nombre: nombre, edad: edad });
}

// Ejemplos de uso
agregarNumero(6);
agregarFruta('pera');
agregarPersona('Ana', 40);

console.log("Array numérico:", numeros);
console.log("Array de frutas:", frutas);
console.log("Array de personas:", personas);