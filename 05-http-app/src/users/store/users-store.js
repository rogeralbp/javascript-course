const state = {
     currentPage: 0,
     users: []
};

const loadNextPage = async() => {

    throw new Error('NOT IMPLEMENTED')
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