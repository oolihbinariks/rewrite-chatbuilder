import { put, call, takeLatest } from "redux-saga/effects";
import { apiAuthorize } from "../../../api/Api";
import { authFailureAction, authSuccessAction } from '../../actions/AuthActions/authActionCreators';
import { AUTH_REQUEST } from '../../actions/AuthActions/authActions'

function* authorizeWorker({payload: {login, password}}){
    try {
        const {token} = yield call(apiAuthorize, '/login', {login, password})
        yield put(authSuccessAction(token))
        localStorage.setItem('token', token)
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid Credentials";
                break;
        
            default:
                message = "Something went wrong";
                break;
        }
        yield put(authFailureAction(message))
        localStorage.removeItem('token')
    }
}

function* authorizeSaga() {
    yield takeLatest(AUTH_REQUEST, authorizeWorker)
}

export default authorizeSaga;