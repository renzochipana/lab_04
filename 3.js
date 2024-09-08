// Función simple para generar una contraseña con letras y números
function generarContraseña(longitud) {
    let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789"; // Caracteres permitidos
    let contraseña = ""; // Iniciar la contraseña vacía
    
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length); // Elegir un carácter aleatorio
        contraseña += caracteres[indice]; // Añadir el carácter a la contraseña
    }
    
    return contraseña; // Devolver la contraseña generada
}

// Ejemplo de uso:
let contraseña = generarContraseña(8);
console.log("Contraseña generada: " + contraseña);
