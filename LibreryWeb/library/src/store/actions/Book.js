import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchBooksSuccess = books => {
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        books: books,
    };
};

export const fetchBooksFail = error => {
    return {
        type: actionTypes.FETCH_BOOKS_FAIL,
        error: error,
    };
};

export const fetchBooksStart = () => {
    return {
        type: actionTypes.FETCH_BOOKS_START,
    };
};

export const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchBooksStart());
        axios
            .get("/api/book")
            .then(res => {
                dispatch(fetchBooksSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchBooksFail(err));
            });
    };
};

export const searchBooks = (query) => {
    return dispatch => {
        dispatch(fetchBooksStart());
        axios
            .get("/api/book/" + query)
            .then(res => {
                dispatch(fetchBooksSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchBooksFail(err));
            });
    };
};

export const fetchBookSuccess = book => {
    return {
        type: actionTypes.FETCH_BOOK_SUCCESS,
        book: book,
    };
};

export const fetchBookFail = error => {
    return {
        type: actionTypes.FETCH_BOOK_FAIL,
        error: error,
    };
};

export const fetchBookStart = () => {
    return {
        type: actionTypes.FETCH_BOOK_START,
    };
};

export const fetchBook = id => {
    return dispatch => {
        dispatch(fetchBookStart());
        axios
            .get("/api/book/" + id)
            .then(res => {
                dispatch(fetchBookSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchBookFail(err));
            });
    };
};

export const addBookSuccess = book => {
    return {
        type: actionTypes.ADD_BOOK_SUCCESS,
        book: book,
    };
};

export const addBookFail = error => {
    return {
        type: actionTypes.ADD_BOOK_FAIL,
        error: error,
    };
};

export const addBookStart = () => {
    return {
        type: actionTypes.ADD_BOOK_START,
    };
};

export const addBook = book => {
    return dispatch => {
        dispatch(addBookStart());
        axios
            .post("/api/book", book)
            .then(res => {
                console.log(res.data);
                dispatch(addBookSuccess(res.data));
            })
            .catch(err => {
                dispatch(addBookFail(err));
            });
    };
};

export const deleteBookSuccess = () => {
    return {
        type: actionTypes.DELETE_BOOK_SUCCESS,
    };
};

export const deleteBookFail = error => {
    return {
        type: actionTypes.DELETE_BOOK_FAIL,
        error: error,
    };
};

export const deleteBookStart = () => {
    return {
        type: actionTypes.DELETE_BOOK_START,
    };
};

export const deleteBook = id => {
    return dispatch => {
        dispatch(deleteBookStart());
        axios
            .delete("/api/book", id)
            .then(res => {
                dispatch(deleteBookSuccess(res.data));
            })
            .catch(err => {
                dispatch(deleteBookFail(err));
            });
    };
};

//

export const editBookSuccess = book => {
    return {
        type: actionTypes.EDIT_BOOK_SUCCESS,
        book: book,
    };
};

export const editBookFail = error => {
    return {
        type: actionTypes.EDIT_BOOK_FAIL,
        error: error,
    };
};

export const editBookStart = () => {
    return {
        type: actionTypes.EDIT_BOOK_START,
    };
};

export const editBook = book => {
    return dispatch => {
        dispatch(editBookStart());
        axios
            .post("/api/book", book)
            .then(res => {
                dispatch(editBookSuccess(res.data));
            })
            .catch(err => {
                dispatch(editBookFail(err));
            });
    };
};
