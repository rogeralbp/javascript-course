import {heroes} from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    //console.log('callbacksComponent');

    const id = '5d86371f1efebc31def272e2';
    findHero(id, (hero) => {

        //aqui se esta haciendo la logica del callback
        element.innerHTML = hero.name;
        console.log(hero.name);
        
    });
    
 }

 /**
  * Ejemplo de funcion callback:
  * callback, es una funcion que  recibe un argumento y ese argumento es una 
  * funcion que a la vez se envoca de la funcion padre definida
  * @param {String} id 
  * @param {(hero: Object)=> void} callback 
  */
 const findHero = (id , callback ) => {

    const hero = heroes.find(hero => hero.id === id)

    callback(hero)
 }