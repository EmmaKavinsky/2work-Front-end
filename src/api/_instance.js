import axios from 'axios'
import store from '../store'

let baseUrl = process.env.VUE_APP_API_ROOT + process.env.VUE_APP_API_PREFIX + '/'
let tiemout = 30000

const instance = axios.create({
  baseURL: baseUrl,
  timeout: tiemout,
  headers: {
    'Content-Type': 'application/json'
  }
})


instance.interceptors.request.use(
    config => {
      config.metadata = { startTime: new Date()}
      if (store.getters.isAuthenticated) {
        config.headers['Authorization'] = 'Bearer ' + store.getters.authToken
      }

      return config;
    },
    error => Promise.reject(error)
)
instance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    }
)

export default instance
