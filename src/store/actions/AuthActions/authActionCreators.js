import { AUTH_FAILURE, AUTH_LOGOUT, AUTH_LOGOUT_SAGA, AUTH_REQUEST, AUTH_SUCCESS } from "./authActions"

export const authRequestAction = ({username, password}) => ({
    type: AUTH_REQUEST,
    payload: {username, password}
})

export const authSuccessAction = (token) => ({
    type: AUTH_SUCCESS,
    payload: token
})

export const authFailureAction = (error) => ({
    type: AUTH_FAILURE,
    payload: error
})
export const authLogoutAction = () => ({
    type: AUTH_LOGOUT
})
export const authLogoutSagaAction = () => ({
    type: AUTH_LOGOUT_SAGA
})