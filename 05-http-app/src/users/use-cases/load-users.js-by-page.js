
import {localhostUserToModel} from '../mappers/localhost-user.mapper';

/**
 * 
 * @param {Number} page 
 * returns
 */
export const loadUsersByPage = async( page=1) => {

    //const url = `${ baseUrl }/users?_page=${ page }`;
    const url = `http://localhost:3001/users?_page=${ page }`;

    const res = await fetch(url);
    const data = await res.json();
    const users = data.data.map(userLike => localhostUserToModel(userLike) );
    console.log(users);
    
}