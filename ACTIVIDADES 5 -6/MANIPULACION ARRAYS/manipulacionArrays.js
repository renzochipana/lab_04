// Archivo: manipulacionArrays.js
// Manipulación de Arrays en JavaScript

// Crear arrays utilizando iniciadores de array
const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 35 }
];

// Funciones para agregar datos a los arrays
function agregarNumero(num) {
    numeros.push(num); // Agrega un número al final del array
}

function agregarFruta(fruta) {
    frutas.push(fruta); // Agrega una fruta al final del array
}

function agregarPersona(nombre, edad) {
    personas.push({ nombre: nombre, edad: edad }); // Agrega una persona al final del array
}

// Rutinas de manipulación de arrays
function manipularArrays() {
    // Agregar elementos a los arrays
    agregarNumero(6);
    agregarFruta('pera');
    agregarPersona('Ana', 40);
    
    // Eliminar el último elemento de cada array
    numeros.pop(); // Elimina el último número
    frutas.pop(); // Elimina la última fruta
    personas.pop(); // Elimina la última persona

    // Modificar un elemento específico
    numeros[0] = 10; // Cambia el primer número a 10
    frutas[1] = 'kiwi'; // Cambia la segunda fruta a kiwi
    personas[0].edad = 26; // Cambia la edad de Juan a 26

    // Mostrar los resultados en la página web
    document.getElementById('resultado').innerHTML = `
        <h2>Resultados de la Manipulación de Arrays</h2>
        <p><strong>Array numérico:</strong> ${numeros.join(', ')}</p>
        <p><strong>Array de frutas:</strong> ${frutas.join(', ')}</p>
        <p><strong>Array de personas:</strong> ${JSON.stringify(personas)}</p>
    `;
}

// Ejecutar la función de manipulación de arrays
manipularArrays();