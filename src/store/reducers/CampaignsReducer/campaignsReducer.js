import { ADD_CAMPAIGN, SAVE_PREPARE_CAMPAIGN, SET_STEP_TYPE,  } from "../../actions/CampaignsActions/campaignsActions";

const initialState = {
    prepareCampaign:{},
    campaigns:[],
    stepType:'root'
}

export const campaignsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SAVE_PREPARE_CAMPAIGN:
            return {...state, prepareCampaign:{...state.prepareCampaign, ...payload}}
        case ADD_CAMPAIGN:
            return {...state, prepareCampaign:{}, campaigns:[...state.campaigns, payload]}
        case SET_STEP_TYPE:
            return {...state, stepType:payload}
        default:
            return state;
    }
}