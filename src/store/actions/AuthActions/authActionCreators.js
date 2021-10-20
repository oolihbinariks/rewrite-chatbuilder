import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./authActions"

export const authRequestAction = (login, password) => ({
    type: AUTH_REQUEST,
    payload: {login, password}
})

export const authSuccessAction = (token) => ({
    type: AUTH_SUCCESS,
    payload: token
})

export const authFailureAction = (error) => ({
    type: AUTH_FAILURE,
    payload: error
})