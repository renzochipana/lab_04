// los elementos HTML 
var boton = document.getElementById('botonAccion');
var mensaje = document.getElementById('mensaje');

// Funcionalidad dinámica: cambiar el texto del párrafo al hacer clic en el botón
boton.addEventListener('click', function() {
    mensaje.textContent = 'Usted es uno de los 10 particpantes  aanr un duplex en la residencia mas exclusiva de Lima';
});