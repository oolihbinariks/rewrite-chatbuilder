import { ADD_AUDIENCE, ADD_USERS_AUDIENCE, DELETE_AUDIENCE, DELETE_USERS_AUDIENCE, GET_ALL_AUDIENCES} from "../../actions/AudiencesActions/audiencesActions";
import { ADD_CAMPAIGN, SAVE_PREPARE_CAMPAIGN } from "../../actions/CampaignsActions/campaignsActions";

const initialState = {
    prepareCampaign:{},
    campaigns:[]
}

export const campaignsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SAVE_PREPARE_CAMPAIGN:
            return {...state, prepareCampaign:{...state.prepareCampaign, ...payload}}
        case ADD_CAMPAIGN:
            return {...state, prepareCampaign:{}, campaigns:[...state.campaigns, payload]}
        default:
            return state;
    }
}