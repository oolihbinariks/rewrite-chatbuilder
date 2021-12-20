import api from './Api'

export const apiAuthorize = async (url = '/api/auth/login', data) => {
    try {
        console.log('Api Data ', data);
        const response = await api.post(url, data)
        console.log('Api esponse ', response);

        return response.data
    } catch (error) {
        return error
    }
}
export const apiAuthLogout = async (url = '/api/auth/logout') => {
    console.log('Api localStorage accessToken', localStorage.getItem('accessToken'))
    try {
        // console.log('Api Data ', data);
        const response = await api.post(url)
        console.log('Api response Logout', response);
        return response.data
    } catch (error) {
        return error
    }
}
export const apiAuthRefreshToken = async (url = '/api/auth/refresh') => {
    try {
        // console.log('Api Data ', data);
        const response = await api.post(url,null, {headers: {'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`},})
        console.log('Api response Refresh', response);
        return response
    } catch (error) {
        return error
    }
}