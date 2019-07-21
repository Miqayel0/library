import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    books: [],
    book: null,
    loading: false 
};

const fetchBooksStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchBooksSuccess = ( state, action ) => {
    return updateObject( state, {
        books: action.books,
        loading: false
    } );
};

const fetchBooksFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchBookStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchBookFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchBookSuccess = ( state, action ) => {
    return updateObject( state, {
        book: action.book,
        loading: false
    } );
};

const addBookFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addBookStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const addBookSuccess = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_BOOKS_START: return fetchBooksStart( state, action );
        case actionTypes.FETCH_BOOKS_SUCCESS: return fetchBooksSuccess( state, action );
        case actionTypes.FETCH_BOOKS_FAIL: return fetchBooksFail( state, action );

        case actionTypes.FETCH_BOOK_START: return fetchBookStart( state, action );
        case actionTypes.FETCH_BOOK_SUCCESS: return fetchBookSuccess( state, action );
        case actionTypes.FETCH_BOOK_FAIL: return fetchBookFail( state, action );

        case actionTypes.ADD_BOOK_START: return addBookStart( state, action );
        case actionTypes.ADD_BOOK_SUCCESS: return addBookSuccess( state, action );
        case actionTypes.ADD_BOOK_FAIL: return addBookFail( state, action );
        default: return state;
    }
};

export default reducer;