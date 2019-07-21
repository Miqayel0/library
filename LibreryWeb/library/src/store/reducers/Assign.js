import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    assignments: [],
    assignment: null,
    loading: false 
};

const fetchAssignsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchAssignsSuccess = ( state, action ) => {
    return updateObject( state, {
        assignments: action.assigns,
        loading: false
    } );
};

const fetchAssignsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchAssignStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchAssignFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchAssignSuccess = ( state, action ) => {
    return updateObject( state, {
        assignment: action.assign,
        loading: false
    } );
};

const addAssignFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addAssignStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const addAssignSuccess = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ASSIGNS_START: return fetchAssignsStart( state, action );
        case actionTypes.FETCH_ASSIGNS_SUCCESS: return fetchAssignsSuccess( state, action );
        case actionTypes.FETCH_ASSIGNS_FAIL: return fetchAssignsFail( state, action );

        case actionTypes.FETCH_ASSIGN_START: return fetchAssignStart( state, action );
        case actionTypes.FETCH_ASSIGN_SUCCESS: return fetchAssignSuccess( state, action );
        case actionTypes.FETCH_ASSIGN_FAIL: return fetchAssignFail( state, action );

        case actionTypes.ADD_ASSIGN_START: return addAssignStart( state, action );
        case actionTypes.ADD_ASSIGN_SUCCESS: return addAssignSuccess( state, action );
        case actionTypes.ADD_ASSIGN_FAIL: return addAssignFail( state, action );
        default: return state;
    }
};

export default reducer;