import { put, call, takeLatest, all } from "redux-saga/effects";
import { addCampaignAction, savePrepareCampaignAction } from "../../actions/CampaignsActions/campaignsActionCreators";
import { ADD_CAMPAIGN_SAGA, SAVE_PREPARE_CAMPAIGN_SAGA } from "../../actions/CampaignsActions/campaignsActions";

function* savePrepareCampaignWorker({payload: prepareCampaign}){
    
    try {
        // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(savePrepareCampaignAction(prepareCampaign))
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
    }
}
function* addCampaignWorker({payload: newCampaign}){
    
    try {
        // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
        yield put(addCampaignAction(newCampaign))
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
    }
}

// function* deleteAudiencesWorker({payload: audienceId}){
    
//     try {
//         // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
//         yield put(deleteAudienceAction(audienceId))
//     } catch (error) {
//         let message;
//         switch (error.status) {
//             case 500:
//                 message = "Internal Server Error";
//                 break;
//             case 401:
//                 message = "Invalid Credentials";
//                 break;
        
//             default:
//                 message = "Something went wrong";
//                 break;
//         }
//         // yield put(authFailureAction(message))
//         // localStorage.removeItem('token')
//     }
// }

// function* addUsersAudienceWorker({payload: {audienceId, users}}){
//     try {

        
//         yield put(addUsersAudienceAction({audienceId, users}))
//     } catch (error) {
        
//         let message;
//         switch (error.status) {
//             case 500:
//                 message = "Internal Server Error";
//                 break;
//             case 401:
//                 message = "Invalid Credentials";
//                 break;
        
//             default:
//                 message = "Something went wrong";
//                 break;
//         }
//         // yield put(authFailureAction(message))
//         // localStorage.removeItem('token')
//     }
// }

// function* deleteUserAudienceWorker({payload: {audienceId, userId}}){
    
//     try {
//         // const {audienceResponce} = yield call(apiAuthorize, '/login', {login, password})
//         yield put(deleteUserAudienceAction({audienceId, userId}))
//     } catch (error) {
//         let message;
//         switch (error.status) {
//             case 500:
//                 message = "Internal Server Error";
//                 break;
//             case 401:
//                 message = "Invalid Credentials";
//                 break;
        
//             default:
//                 message = "Something went wrong";
//                 break;
//         }
//         // yield put(authFailureAction(message))
//         // localStorage.removeItem('token')
//     }
// }

function* campaignSaga() {
   yield all([
       yield takeLatest(SAVE_PREPARE_CAMPAIGN_SAGA, savePrepareCampaignWorker),
       yield takeLatest(ADD_CAMPAIGN_SAGA, addCampaignWorker),
    ])
}

export default campaignSaga;