// Archivo: usoObjetoNumber.js
// Uso del objeto Number en JavaScript

// Función para visualizar las propiedades y métodos del objeto Number
function visualizarObjetoNumber() {
    // Obtener todas las propiedades del objeto Number
    const propiedades = Object.getOwnPropertyNames(Number);
    
    // Mostrar las propiedades en la consola
    console.log("Propiedades del objeto Number:");
    propiedades.forEach(propiedad => {
        console.log(propiedad);
    });

    // Usar algunos métodos del objeto Number
    // 1. Number.isInteger: Verifica si un valor es un número entero
    const esEntero = Number.isInteger(42);
    console.log("¿Es 42 un número entero?:", esEntero);

    // 2. Number.parseFloat: Convierte una cadena a un número de punto flotante
    const numeroFlotante = Number.parseFloat("3.14");
    console.log("Número flotante de '3.14':", numeroFlotante);

    // 3. Number.parseInt: Convierte una cadena a un número entero
    const numeroEntero = Number.parseInt("42.99");
    console.log("Número entero de '42.99':", numeroEntero);

    // Mostrar resultados en la página web
    document.getElementById('resultado').innerHTML = `
        <h2>Resultados del Objeto Number</h2>
        <p><strong>¿Es 42 un número entero?:</strong> ${esEntero}</p>
        <p><strong>Número flotante de '3.14':</strong> ${numeroFlotante}</p>
        <p><strong>Número entero de '42.99':</strong> ${numeroEntero}</p>
    `;
}

// Ejecutar la función para visualizar el objeto Number
visualizarObjetoNumber();