import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371f233dc9f2425f16916';
    findHero(id, (error, hero) => {

        //aqui se esta haciendo la logica del callback
         if (error) {
             element.innerHTML = error;
             console.log(error);
             return;
         }
        element.innerHTML = hero.name;
    });

}

/**
 * Ejemplo de funcion callback:
 * callback, es una funcion que  recibe un argumento y ese argumento es una 
 * funcion que a la vez se envoca de la funcion padre definida
 * @param {String} id 
 * @param {(error: String|null,hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id)

    if (!hero) {
        callback(`NO HEROE FOUNDED with ID=${id}`);
        return;
    }

    callback(null,hero);
}