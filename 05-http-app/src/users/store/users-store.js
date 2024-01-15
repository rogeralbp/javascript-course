import { loadUsersByPage } from "../use-cases/load-users.js-by-page";

const state = {
     currentPage: 0,
     users: []
};

const loadNextPage = async() => {

    await loadUsersByPage( state.currentPage + 1 );
    //throw new Error('NOT IMPLEMENTED')
};

const loadPreviousPage = async() => {

    throw new Error('NOT IMPLEMENTED')
};

const onUserChanged = async() => {

    throw new Error('NOT IMPLEMENTED')
};

const reloadPage = async() => {

    throw new Error('NOT IMPLEMENTED')
};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}