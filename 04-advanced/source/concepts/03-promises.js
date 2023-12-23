import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    console.log('promiseComponent');

    const renderHero = (hero) => {

        element.innerHTML = hero.name;
    };
    const renderError = (error) => {

        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${ error }</h3>
        `;
    };

    const id = '5d86371fd55e2e2a30fe1cc4';

    findHero(id)
        .then( renderHero )
        .catch(renderError);
    }

/**
* @param {String} id
* @returns {Promise}
*/
const findHero = (id) => {


    return new Promise((resolve, reject) => {
        
        const hero = heroes.find(hero => hero.id === id)

        if(hero) {
            resolve(hero);
            return;
        }

        reject(`NO HEROE FOUNDED with ID=${id}`);

    });

}