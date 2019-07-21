import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    clients: [],
    client: null,
    loading: false 
};

const fetchClientsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchClientsSuccess = ( state, action ) => {
    console.log(action.clients);
    return updateObject( state, {
        clients: action.clients,
        loading: false
    } );
};

const fetchClientsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchClientStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchClientFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchClientSuccess = ( state, action ) => {
    return updateObject( state, {
        client: action.client,
        loading: false
    } );
};

const addClientFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addClientStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const addClientSuccess = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CLIENTS_START: return fetchClientsStart( state, action );
        case actionTypes.FETCH_CLIENTS_SUCCESS: return fetchClientsSuccess( state, action );
        case actionTypes.FETCH_CLIENTS_FAIL: return fetchClientsFail( state, action );

        case actionTypes.FETCH_CLIENT_START: return fetchClientStart( state, action );
        case actionTypes.FETCH_CLIENT_SUCCESS: return fetchClientSuccess( state, action );
        case actionTypes.FETCH_CLIENT_FAIL: return fetchClientFail( state, action );

        case actionTypes.ADD_CLIENT_START: return addClientStart( state, action );
        case actionTypes.ADD_CLIENT_SUCCESS: return addClientSuccess( state, action );
        case actionTypes.ADD_CLIENT_FAIL: return addClientFail( state, action );
        default: return state;
    }
};

export default reducer;