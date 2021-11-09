import { ADD_CAMPAIGN, ADD_CAMPAIGN_SAGA, SAVE_PREPARE_CAMPAIGN, SAVE_PREPARE_CAMPAIGN_SAGA } from "./campaignsActions"


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