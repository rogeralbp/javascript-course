/**
 * 
 * @param {array<String>} deck ejemplo ['C','D','H','S','A','J','Q','K'];
 * @returns {array<String[LastIndex]>} ultimo elemento de la varaja de cartas
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}