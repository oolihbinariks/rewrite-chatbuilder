import { put, call, takeLatest, all } from "redux-saga/effects";
import { addAudienceAction, addUsersAudienceAction, deleteAudienceAction, deleteUserAudienceAction } from "../../actions/AudiencesActions/audiencesActionCreators";
import { ADD_AUDIENCE_SAGA, ADD_USERS_AUDIENCE_SAGA, DELETE_AUDIENCE_SAGA, DELETE_USERS_AUDIENCE_SAGA } from "../../actions/AudiencesActions/audiencesActions";

function* addAudiencesWorker({payload: {titleAudience}}){
    
    const newAudience = {
        id: Math.round(Math.random() * Math.random() * 100 + 121).toString(),
        name: titleAudience,
        users:[]
    }
    try {
        // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(addAudienceAction(newAudience))
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
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* deleteAudiencesWorker({payload: audienceId}){
    
    try {
        // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(deleteAudienceAction(audienceId))
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
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* addUsersAudienceWorker({payload: {audienceId, users}}){
    try {

        
        yield put(addUsersAudienceAction({audienceId, users}))
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
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* deleteUserAudienceWorker({payload: {audienceId, userId}}){
    
    try {
        // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(deleteUserAudienceAction({audienceId, userId}))
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
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* audiencesSaga() {
   yield all([
       yield takeLatest(DELETE_AUDIENCE_SAGA, deleteAudiencesWorker),
       yield takeLatest(ADD_AUDIENCE_SAGA, addAudiencesWorker),
       yield takeLatest(ADD_USERS_AUDIENCE_SAGA, addUsersAudienceWorker),
       yield takeLatest(DELETE_USERS_AUDIENCE_SAGA, deleteUserAudienceWorker),
    ])
}

export default audiencesSaga;