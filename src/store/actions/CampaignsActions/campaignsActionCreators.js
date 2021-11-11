import { ADD_CAMPAIGN, ADD_CAMPAIGN_SAGA, SAVE_PREPARE_CAMPAIGN, SAVE_PREPARE_CAMPAIGN_SAGA, SET_STEP_TYPE } from "./campaignsActions"


export const savePrepareCampaignAction = (prepareCampaign) => ({
    type: SAVE_PREPARE_CAMPAIGN,
    payload: prepareCampaign
})
export const savePrepareCampaignSagaAction = (prepareCampaign) => ({
    type: SAVE_PREPARE_CAMPAIGN_SAGA,
    payload: prepareCampaign
})

export const addCampaignAction = (newCampaign) => ({
    type: ADD_CAMPAIGN,
    payload: newCampaign
})
export const addCampaignSagaAction = (newCampaign) => ({
    type: ADD_CAMPAIGN_SAGA,
    payload: newCampaign
})
export const setStepTypeAction = (stepType) => ({
    type: SET_STEP_TYPE,
    payload: stepType
})