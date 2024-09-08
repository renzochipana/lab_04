// Archivo: usoObjetoWindow.js
// Uso del objeto Window en JavaScript

// Función para visualizar las propiedades y métodos del objeto Window
function visualizarObjetoWindow() {
    // Obtener todas las propiedades del objeto Window
    const propiedades = Object.getOwnPropertyNames(window);
    
    // Mostrar las propiedades en la consola
    console.log("Propiedades del objeto Window:");
    propiedades.forEach(propiedad => {
        console.log(propiedad);
    });

    // Usar algunos métodos del objeto Window
    // 1. alert: Muestra un cuadro de alerta
    alert("¡Bienvenido a la demostración del objeto Window!");

    // 2. confirm: Muestra un cuadro de confirmación
    const confirmacion = confirm("¿Deseas continuar?");
    console.log("Respuesta de confirmación:", confirmacion);

    // 3. prompt: Solicita información al usuario
    const nombre = prompt("¿Cuál es tu nombre?");
    console.log("Nombre ingresado:", nombre);
}

// Ejecutar la función para visualizar el objeto Window
visualizarObjetoWindow();