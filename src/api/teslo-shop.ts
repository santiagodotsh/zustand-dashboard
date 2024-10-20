import axios from 'axios'
import { useAuthStore } from '../stores/auth'

export const tesloShop = axios.create({
  baseURL: 'http://localhost:3000/api'
})

tesloShop.interceptors.request.use(config => {
  const token = useAuthStore.getState().token

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})
