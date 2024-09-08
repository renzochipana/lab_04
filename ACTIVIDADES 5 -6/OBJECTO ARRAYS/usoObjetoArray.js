// Archivo: usoObjetoArray.js
// Uso del objeto Array en JavaScript

// Función para visualizar las propiedades y métodos del objeto Array
function visualizarObjetoArray() {
    // Obtener todas las propiedades del objeto Array
    const propiedades = Object.getOwnPropertyNames(Array);
    
    // Mostrar las propiedades en la consola
    console.log("Propiedades del objeto Array:");
    propiedades.forEach(propiedad => {
        console.log(propiedad);
    });

    // Usar algunos métodos del objeto Array
    // 1. Array.isArray: Verifica si un objeto es un array
    const esArray = Array.isArray([1, 2, 3]);
    console.log("¿Es un array?:", esArray);

    // 2. Array.from: Crea un nuevo array a partir de un objeto iterable
    const nuevoArray = Array.from('Hola');
    console.log("Nuevo array a partir de un string:", nuevoArray);

    // 3. Array.of: Crea un nuevo array con un número variable de elementos
    const arrayDeNumeros = Array.of(1, 2, 3, 4, 5);
    console.log("Array creado con Array.of:", arrayDeNumeros);

    // Mostrar resultados en la página web
    document.getElementById('resultado').innerHTML = `
        <h2>Resultados del Objeto Array</h2>
        <p><strong>¿Es un array?:</strong> ${esArray}</p>
        <p><strong>Nuevo array a partir de un string:</strong> [${nuevoArray.join(', ')}]</p>
        <p><strong>Array creado con Array.of:</strong> [${arrayDeNumeros.join(', ')}]</p>
    `;
}

// Ejecutar la función para visualizar el objeto Array
visualizarObjetoArray();