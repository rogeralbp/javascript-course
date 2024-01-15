//import meta.

/**
 * 
 * @param {Number} page 
 * returns
 */
export const loadUsersByPage = async( page=1) => {

    //const url = `${ import.meta.VITE_BASE_URL }/users?_page=${ page }`;
    const url = `http://localhost:3001/users?_page=${ page }`;

    const res = await fetch(url);
    const data = await res.json();

    console.log({data});
    
}