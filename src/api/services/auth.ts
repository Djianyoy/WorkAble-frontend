import api, { getAccessToken } from '../core/axios'
import axios from 'axios'
import { RegisterApiSchema } from '@/lib/validations/auth'
import { LoginFormData } from '@/lib/validations/auth'
import { LoginPayload } from '@/shared/types/auth'

export const authService = {
  login: async (payload: LoginPayload) => {
    const response = await axios.post('/api/auth/login', payload)
    return response.data
  },
  register: async (payload: RegisterApiSchema) => {
    const response = await api.post('/auth/register', payload)
    return response.data
  },
  logout: async () => {
    const response = await axios.post('/api/auth/logout')
    return response.data
  },
  isAuthenticated: () => {
    const token = getAccessToken()
    return !!token
  },
}