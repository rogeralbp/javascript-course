// Modulo de crear nuevo deck

import _ from 'underscore'

/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDeCarta ejemplo ['C','D','H','S'];
 * @param {array<String>} tiposEspeciales ejemplo  ['A','J','Q','K'];
 * @returns {array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.lenght === 0) throw new Error('tiposDeCarta no esta definido')
    if(!tiposEspeciales|| tiposEspeciales.lenght === 0) throw new Error('tiposEspeciales no esta definido')
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}