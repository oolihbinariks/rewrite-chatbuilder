import { put, call, takeLatest, all } from "redux-saga/effects";
import { apiAuthLogout, apiAuthorize } from "../../../api/AuthApi";
import { toggleLoadingAppAction } from "../../actions/AppActions/appActionCreators";
import { authFailureAction, authLogoutAction, authSuccessAction } from '../../actions/AuthActions/authActionCreators';
import { AUTH_LOGOUT_SAGA, AUTH_REQUEST } from '../../actions/AuthActions/authActions'

function* authorizeWorker({payload: {username, password}}){
    yield put(toggleLoadingAppAction())
    try {
        const token = yield call(apiAuthorize, '/api/auth/login', {username, password})
        console.log("Authorize tiken", token);
        localStorage.setItem('accessToken', token.plainTextToken)
        localStorage.setItem('refreshToken',token.plainRefreshToken)
        yield put(toggleLoadingAppAction())
        yield put(authSuccessAction(token))
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
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')
                    yield put(toggleLoadingAppAction())
    }
}
function* authorizeLogoutWorker(){
    try {
        const token = yield call(apiAuthLogout, '/api/auth/logout')
        console.log("Authorize Logout", token);
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        yield put(authLogoutAction())
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
    }
}

function* authorizeSaga() {
    yield all([
        yield takeLatest(AUTH_REQUEST, authorizeWorker),
        yield takeLatest(AUTH_LOGOUT_SAGA, authorizeLogoutWorker),
     ])
}

export default authorizeSaga;