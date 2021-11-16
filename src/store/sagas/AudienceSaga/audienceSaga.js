import { Redirect } from "react-router-dom";
import { put, call, takeLatest, all } from "redux-saga/effects";
import { addAudienceApi, deleteAudienceByIdApi, getAllAudiencesApi } from "../../../api/AudienceApi";
import { AUDIENCES_ROUTE, CAMPAIGNS_ROUTE } from "../../../constants/routesUrl";
import { toggleLoadingAppAction } from "../../actions/AppActions/appActionCreators";
import { addAudienceAction, addUsersAudienceAction, deleteAudienceAction, deleteUserAudienceAction, getAllAudiencesAction } from "../../actions/AudiencesActions/audiencesActionCreators";
import { ADD_AUDIENCE_SAGA, ADD_USERS_AUDIENCE_SAGA, DELETE_AUDIENCE_SAGA, DELETE_USERS_AUDIENCE_SAGA, GET_ALL_AUDIENCES_SAGA } from "../../actions/AudiencesActions/audiencesActions";

function* addAudiencesWorker({payload: {titleAudience}}){
    yield put(toggleLoadingAppAction())
    const newAudience = {
        title:titleAudience
    }
    try {
        const {data} = yield call(addAudienceApi, '/api/audience', newAudience)
        if (data) {
            yield put(addAudienceAction(data))
            yield put(toggleLoadingAppAction())
            return(<Redirect to={CAMPAIGNS_ROUTE} />)
        } else {
            yield put(toggleLoadingAppAction())
        }
        console.log('Delete Audience By Id', data);
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
        yield put(toggleLoadingAppAction())
        console.log('message api error', message);
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}
function* getAllAudiencesWorker(){
    try {
        yield put(toggleLoadingAppAction())
        const {data} = yield call(getAllAudiencesApi, '/api/audience')
        if (data) {
            yield put(getAllAudiencesAction(data))
            yield put(toggleLoadingAppAction())
        } else {
            yield put(toggleLoadingAppAction())
        }
        
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
        console.log('message api error', message);
        // yield put(authFailureAction(message))
        // localStorage.removeItem('token')
    }
}

function* deleteAudiencesWorker({payload: audienceId}){
    yield put(toggleLoadingAppAction())
    try {
        const data = yield call(deleteAudienceByIdApi, `/api/audience/${audienceId}`)
        yield put(toggleLoadingAppAction())
        console.log('Delete data aud', data);
        if (data) {
            console.log('redirect');
            return(<Redirect to={CAMPAIGNS_ROUTE} />)
        } else {
            
        }
        // yield put(deleteAudienceAction(audienceId))
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
        yield put(toggleLoadingAppAction())
        console.log('message api error', message);
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
       yield takeLatest(GET_ALL_AUDIENCES_SAGA, getAllAudiencesWorker),
       yield takeLatest(DELETE_AUDIENCE_SAGA, deleteAudiencesWorker),
       yield takeLatest(ADD_AUDIENCE_SAGA, addAudiencesWorker),
       yield takeLatest(ADD_USERS_AUDIENCE_SAGA, addUsersAudienceWorker),
       yield takeLatest(DELETE_USERS_AUDIENCE_SAGA, deleteUserAudienceWorker),
    ])
}

export default audiencesSaga;