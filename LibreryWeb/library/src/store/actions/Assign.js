import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchAssignsSuccess = assigns => {
    return {
        type: actionTypes.FETCH_ASSIGNS_SUCCESS,
        assigns: assigns,
    };
};

export const fetchAssignsFail = error => {
    return {
        type: actionTypes.FETCH_ASSIGNS_FAIL,
        error: error,
    };
};

export const fetchAssignsStart = () => {
    return {
        type: actionTypes.FETCH_ASSIGNS_START,
    };
};

export const fetchAssigns = () => {
    return dispatch => {
        dispatch(fetchAssignsStart());
        axios
            .get("/api/assigning")
            .then(res => {
                dispatch(fetchAssignsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchAssignsFail(err));
            });
    };
};

export const fetchClientAssignments = (clientId) => {
    return dispatch => {
        dispatch(fetchAssignsStart());
        axios
            .get(`/api/client/${clientId}/assigning`)
            .then(res => {
                dispatch(fetchAssignsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchAssignsFail(err));
            });
    };
};

export const searchAssigns = (query) => {
    return dispatch => {
        dispatch(fetchAssignsStart());
        axios
            .get("/api/assigning/" + query)
            .then(res => {
                dispatch(fetchAssignsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchAssignsFail(err));
            });
    };
};

export const fetchAssignSuccess = assign => {
    return {
        type: actionTypes.FETCH_ASSIGN_SUCCESS,
        assign: assign,
    };
};

export const fetchAssignFail = error => {
    return {
        type: actionTypes.FETCH_ASSIGN_FAIL,
        error: error,
    };
};

export const fetchAssignStart = () => {
    return {
        type: actionTypes.FETCH_ASSIGN_START,
    };
};

export const fetchAssign = id => {
    return dispatch => {
        dispatch(fetchAssignStart());
        axios
            .get("/api/assigning/" + id)
            .then(res => {
                dispatch(fetchAssignSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchAssignFail(err));
            });
    };
};

export const addAssignSuccess = assign => {
    return {
        type: actionTypes.ADD_ASSIGN_SUCCESS,
        assign: assign,
    };
};

export const addAssignFail = error => {
    return {
        type: actionTypes.ADD_ASSIGN_FAIL,
        error: error,
    };
};

export const addAssignStart = () => {
    return {
        type: actionTypes.ADD_ASSIGN_START,
    };
};

export const addAssign = assign => {
    return dispatch => {
        dispatch(addAssignStart());
        axios
            .post("/api/assigning", assign)
            .then(res => {
                console.log(res.data);
                dispatch(addAssignSuccess(res.data));
            })
            .catch(err => {
                dispatch(addAssignFail(err));
            });
    };
};

export const deleteAssignSuccess = () => {
    return {
        type: actionTypes.DELETE_ASSIGN_SUCCESS,
    };
};

export const deleteAssignFail = error => {
    return {
        type: actionTypes.DELETE_ASSIGN_FAIL,
        error: error,
    };
};

export const deleteAssignStart = () => {
    return {
        type: actionTypes.DELETE_ASSIGN_START,
    };
};

export const deleteAssign = (assign) => {
    return dispatch => {
        dispatch(deleteAssignStart());
        axios
            .put("/api/assigning", assign)
            .then(res => {
                dispatch(deleteAssignSuccess(res.data));
            })
            .catch(err => {
                dispatch(deleteAssignFail(err));
            });
    };
};

//

export const editAssignSuccess = assign => {
    return {
        type: actionTypes.EDIT_ASSIGN_SUCCESS,
        assign: assign,
    };
};

export const editAssignFail = error => {
    return {
        type: actionTypes.EDIT_ASSIGN_FAIL,
        error: error,
    };
};

export const editAssignStart = () => {
    return {
        type: actionTypes.EDIT_ASSIGN_START,
    };
};

export const editAssign = assign => {
    return dispatch => {
        dispatch(editAssignStart());
        axios
            .post("/api/assigning", assign)
            .then(res => {
                dispatch(editAssignSuccess(res.data));
            })
            .catch(err => {
                dispatch(editAssignFail(err));
            });
    };
};
