import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchClientsSuccess = clients => {
    return {
        type: actionTypes.FETCH_CLIENTS_SUCCESS,
        clients: clients,
    };
};

export const fetchClientsFail = error => {
    return {
        type: actionTypes.FETCH_CLIENTS_FAIL,
        error: error,
    };
};

export const fetchClientsStart = () => {
    return {
        type: actionTypes.FETCH_CLIENTS_START,
    };
};

export const fetchClients = () => {
    return dispatch => {
        dispatch(fetchClientsStart());
        axios
            .get("/api/client")
            .then(res => {
                dispatch(fetchClientsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchClientsFail(err));
            });
    };
};

export const searchClients = (query) => {
    return dispatch => {
        dispatch(fetchClientsStart());
        axios
            .get("/api/client/" + query)
            .then(res => {
                dispatch(fetchClientsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchClientsFail(err));
            });
    };
};

export const fetchClientSuccess = client => {
    return {
        type: actionTypes.FETCH_CLIENT_SUCCESS,
        client: client,
    };
};

export const fetchClientFail = error => {
    return {
        type: actionTypes.FETCH_CLIENT_FAIL,
        error: error,
    };
};

export const fetchClientStart = () => {
    return {
        type: actionTypes.FETCH_CLIENT_START,
    };
};

export const fetchClient = id => {
    return dispatch => {
        dispatch(fetchClientStart());
        axios
            .get("/api/client/" + id)
            .then(res => {
                dispatch(fetchClientSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchClientFail(err));
            });
    };
};

export const addClientSuccess = client => {
    return {
        type: actionTypes.ADD_CLIENT_SUCCESS,
        client: client,
    };
};

export const addClientFail = error => {
    return {
        type: actionTypes.ADD_CLIENT_FAIL,
        error: error,
    };
};

export const addClientStart = () => {
    return {
        type: actionTypes.ADD_CLIENT_START,
    };
};

export const addClient = client => {
    return dispatch => {
        dispatch(addClientStart());
        axios
            .post("/api/client", client)
            .then(res => {
                console.log(res.data);
                dispatch(addClientSuccess(res.data));
            })
            .catch(err => {
                dispatch(addClientFail(err));
            });
    };
};

export const deleteClientSuccess = () => {
    return {
        type: actionTypes.DELETE_CLIENT_SUCCESS,
    };
};

export const deleteClientFail = error => {
    return {
        type: actionTypes.DELETE_CLIENT_FAIL,
        error: error,
    };
};

export const deleteClientStart = () => {
    return {
        type: actionTypes.DELETE_CLIENT_START,
    };
};

export const deleteClient = id => {
    return dispatch => {
        dispatch(deleteClientStart());
        axios
            .delete("/api/client", id)
            .then(res => {
                dispatch(deleteClientSuccess(res.data));
            })
            .catch(err => {
                dispatch(deleteClientFail(err));
            });
    };
};

//

export const editClientSuccess = client => {
    return {
        type: actionTypes.EDIT_CLIENT_SUCCESS,
        client: client,
    };
};

export const editClientFail = error => {
    return {
        type: actionTypes.EDIT_CLIENT_FAIL,
        error: error,
    };
};

export const editClientStart = () => {
    return {
        type: actionTypes.EDIT_CLIENT_START,
    };
};

export const editClient = client => {
    return dispatch => {
        dispatch(editClientStart());
        axios
            .post("/api/client", client)
            .then(res => {
                dispatch(editClientSuccess(res.data));
            })
            .catch(err => {
                dispatch(editClientFail(err));
            });
    };
};
