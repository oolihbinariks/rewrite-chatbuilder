import axios from 'axios'

const api = axios.create({
    // baseURL: process.env.APP_URL
    baseURL: 'http://localhost:8080'
})

export const getAllAudiencesApi = async (url='/api/audience') => {
    try {
        const response = await api.get(url)
        return response.data
    } catch (error) {
        return error
    }
}
export const deleteAudienceByIdApi = async (url='/api/audience/:id') => {
    try {
        const response = await api.delete(url)
        return response.data
    } catch (error) {
        return error
    }
}
export const addAudienceApi = async (url='/api/audience', newAudience) => {
    try {
        const response = await api.post(url, newAudience)
        return response.data
    } catch (error) {
        return error
    }
}