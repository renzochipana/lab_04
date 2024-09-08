// Archivo: iteradoresArrays.js
// Uso de Iteradores en Arrays en JavaScript

// Crear arrays utilizando iniciadores de array
const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja', 'kiwi', 'pera'];
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 35 }
];

// Función para aplicar iteradores a los arrays
function aplicarIteradores() {
    // Usando forEach para iterar sobre el array de números
    let resultadosNumeros = "Números multiplicados por 2:<br>";
    numeros.forEach(num => {
        resultadosNumeros += num * 2 + "<br>"; // Multiplica cada número por 2
    });

    // Usando map para crear un nuevo array de frutas en mayúsculas
    const frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());
    let resultadosFrutas = "Frutas en mayúsculas:<br>" + frutasMayusculas.join(", ") + "<br>";

    // Usando filter para obtener personas mayores de 28 años
    const personasMayores = personas.filter(persona => persona.edad > 28);
    let resultadosPersonas = "Personas mayores de 28 años:<br>" + JSON.stringify(personasMayores) + "<br>";

    // Usando reduce para sumar todos los números
    const sumaNumeros = numeros.reduce((acumulador, num) => acumulador + num, 0);
    let resultadosSuma = "Suma de números: " + sumaNumeros + "<br>";

    // Mostrar resultados en la página web
    document.getElementById('resultado').innerHTML = `
        <h2>Resultados de los Iteradores de Arrays</h2>
        ${resultadosNumeros}
        ${resultadosFrutas}
        ${resultadosPersonas}
        ${resultadosSuma}
    `;
}

// Ejecutar la función de iteradores
aplicarIteradores();