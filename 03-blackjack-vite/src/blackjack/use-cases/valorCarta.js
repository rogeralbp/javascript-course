/**
 * Calcula el valor de una carta en un juego de cartas.
 * @param {string} carta - La representación de la carta (por ejemplo, 'A', '2H', 'QD').
 * @returns {number} - El valor numérico de la carta.
 */
export const valorCarta = (carta) => {
    // Extraer el valor de la carta eliminando el último carácter (el palo).
    const valor = carta.substring(0, carta.length - 1);

    // Comprobar si el valor no es un número.
    if (isNaN(valor)) {
        // Si el valor es 'A', su valor es 11; de lo contrario, es 10.
        return (valor === 'A') ? 11 : 10;
    } else {
        // Si el valor es un número, se convierte a tipo numérico.
        return parseFloat(valor);
    }
}
