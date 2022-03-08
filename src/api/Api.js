import axios from 'axios'
import { apiAuthRefreshToken } from './AuthApi';

// console.log('API process.env', process.env);

export const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
})

api.interceptors.request.use(
    async config => {
      if (localStorage.getItem('accessToken')) {
        config.headers = { 
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        }
      }
      
      return config;
    },
    error => {
      Promise.reject(error)
  });

api.interceptors.response.use((response) => {
    return response
  }, 
  async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const newToken = await apiAuthRefreshToken()
          if (newToken.status === 200) {
              // 1) put token to LocalStorage
              localStorage.setItem('accessToken', newToken.data.plainTextToken)
              localStorage.setItem('refreshToken', newToken.data.plainRefreshToken)
              // console.log('New  refreshToken', newToken.data.plainRefreshToken);

              // 2) Change Authorization header
              api.defaults.headers.common['Authorization'] = 'Bearer ' + newToken.data.plainTextToken;

              // 3) return originalRequest object with api.
              return api(originalRequest);
          }
          return newToken
      }
  }
)

export default api