
import {User} from '../models/user';

/**
 * 
 * @param {Like<User>} localHostUser object information
 * @returns {User} object
 */
export const localhostUserToModel = (localHostUser) => {


    const {

        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,

    } = localHostUser


    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender,
    })
}

export default localhostUserToModel; // Asegúrate de tener algo como esto
