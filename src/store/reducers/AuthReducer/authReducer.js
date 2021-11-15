import { AUTH_SUCCESS, AUTH_FAILURE } from "../../actions/AuthActions/authActions";

const initialState = {
    // token: localStorage.getItem('token'),
    token: 'l15',
    error: null,
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_SUCCESS:
            return {...state, token: payload};
        case AUTH_FAILURE:
            return {...state, error: payload};    
        default:
            return state;
    }
}