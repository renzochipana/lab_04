// Convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Convertir de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Ejemplo de uso:
let celsius = 25;
let fahrenheit = 77;

console.log(celsius + "°C son " + celsiusAFahrenheit(celsius) + "°F");
console.log(fahrenheit + "°F son " + fahrenheitACelsius(fahrenheit) + "°C");
