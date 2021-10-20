import axios from 'axios'

const api = axios.create({
    baseURL: 'https://some-domain.com/api'
})

export const apiAuthorize = async (url, data) => {
    try {
        const response = await api.post(url, data)
        return response
    } catch (error) {
        return error
    }
}