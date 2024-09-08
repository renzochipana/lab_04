function calcularPropina(montoCuenta, porcentajePropina) {
    let propina = montoCuenta * (porcentajePropina / 100);
    let totalPagar = montoCuenta + propina;
        return {
        propina: propina.toFixed(2), 
        total: totalPagar.toFixed(2)
    };
}
let resultado = calcularPropina(100, 5);
console.log("Propina: $" + resultado.propina); 
console.log("Total a pagar: $" + resultado.total); 