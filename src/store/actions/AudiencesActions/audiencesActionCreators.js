import { ADD_AUDIENCE, ADD_AUDIENCE_SAGA, ADD_USERS_AUDIENCE, ADD_USERS_AUDIENCE_SAGA, DELETE_AUDIENCE, DELETE_AUDIENCE_SAGA, DELETE_USERS_AUDIENCE, DELETE_USERS_AUDIENCE_SAGA, GET_ALL_AUDIENCES } from "./audiencesActions"

export const getAllAudiencesAction = () => ({
    type: GET_ALL_AUDIENCES,
})

export const addAudienceAction = (audience) => ({
    type: ADD_AUDIENCE,
    payload: audience
})
export const addAudienceSagaAction = (audience) => ({
    type: ADD_AUDIENCE_SAGA,
    payload: audience
})
export const deleteAudienceAction = (audienceId) => ({
    type: DELETE_AUDIENCE,
    payload: audienceId
})
export const deleteAudienceSagaAction = (audienceId) => ({
    type: DELETE_AUDIENCE_SAGA,
    payload: audienceId
})
export const addUsersAudienceAction = (payload) => ({
    type: ADD_USERS_AUDIENCE,
    payload: payload
})
export const addUsersAudienceSagaAction = (payload) => ({
    type: ADD_USERS_AUDIENCE_SAGA,
    payload: payload
})
export const deleteUserAudienceAction = ({audienceId, userId}) => ({
    type: DELETE_USERS_AUDIENCE,
    payload: {audienceId, userId}
})
export const deleteUserAudienceSagaAction = ({audienceId, userId}) => ({
    type: DELETE_USERS_AUDIENCE_SAGA,
    payload: {audienceId, userId}
})