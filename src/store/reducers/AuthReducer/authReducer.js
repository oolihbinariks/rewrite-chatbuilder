import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from "../../actions/AuthActions/authActions";

const initialState = {
    // token: localStorage.getItem('token'),
    token: {
        name:null, 
        expireAt: null, 
        accessToken: localStorage.getItem('accessToken'), 
        refreshToken: localStorage.getItem('refreshToken')
    },
    error: null,
}

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_SUCCESS:
            return {...state, token: {name:payload.name, expireAt: payload.expireAt, accessToken: payload.plainTextToken, refreshToken: payload.plainRefreshToken}};
        case AUTH_FAILURE:
            return {...state, error: payload};
        case AUTH_LOGOUT:
            return {...state, token: {
                    name:null, 
                    expireAt: null, 
                    accessToken: localStorage.getItem('accessToken'), 
                    refreshToken: localStorage.getItem('refreshToken')
                }
            };
        default:
            return state;
    }
}