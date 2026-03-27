import api, { setAccessToken, getAccessToken } from '../core/axios'
import { LoginFormData } from '@/lib/validations/auth'
import { handleError } from './errors'
// import { RegisterFormData}

export interface User {
  id: string
  email: string
}

export interface LoginResponse {
  data: {
    access_token: string
    refresh_token: string
    user: User
  }
  message: string
  success: true
}

export interface ErrorResponse {
  success: false
  error: {
    type: string
    message: string
    detail: string
    status: number
  }
}

export interface LoginPayload {
  email: string
  password: string
}

export const authService = {
  async login(credentials: LoginFormData): Promise<LoginResponse> {
    try {
      console.log('Login attempt:', { email: credentials.email })

      const response = await api.post<LoginResponse>('/auth/login', credentials)

      console.log('Login successful:', {
        user: response.data.data.user.email,
        hasAccessToken: !!response.data.data.access_token,
      })

      setAccessToken(response.data.data.access_token)


      return response.data
    } catch (error) {
      console.error('Login failed:', error)
      throw handleError(error)
    }
  },

  // /**
  //  * Register new user
  //  */
  // async register(data: RegisterFormData): Promise<LoginResponse> {
  //   try {
  //     console.log('📝 Register attempt:', {
  //       email: data.email,
  //       role: data.role,
  //     })

  //     const response = await api.post<LoginResponse>('/auth/register', data)

  //     console.log('✅ Registration successful')

  //     // Store access token
  //     setAccessToken(response.data.data.access_token)

  //     return response.data
  //   } catch (error: any) {
  //     console.error('❌ Registration failed:', error)
  //     throw handleError(error)
  //   }
  // },

  /**
   * Login with Google OAuth
   */
  // async googleLogin(googleToken: string): Promise<LoginResponse> {
  //   try {
  //     console.log('🔐 Google login attempt')

  //     const response = await api.post<LoginResponse>('/auth/google', {
  //       token: googleToken,
  //     })

  //     console.log('✅ Google login successful')

  //     setAccessToken(response.data.data.access_token)

  //     return response.data
  //   } catch (error: any) {
  //     console.error('❌ Google login failed:', error)
  //     throw handleError(error)
  //   }
  // },

  /**
   * Refresh access token using refresh token (from httpOnly cookie)
   */
  // async refreshToken(): Promise<RefreshResponse> {
  //   try {
  //     console.log('Refreshing access token...')

  //     const response = await api.post<RefreshResponse>('/auth/refresh')

  //     console.log('Token refreshed:', {
  //       expiresIn: response.data.data.expires_in,
  //     })

  //     // Update access token in memory
  //     setAccessToken(response.data.data.access_token)

  //     return response.data
  //   } catch (error) {
  //     console.error('❌ Token refresh failed:', error)
  //     throw handleError(error)
  //   }
  // },

  
  async logout(): Promise<void> {
    try {
      console.log('Logging out...')

      await api.post('/auth/logout')

      setAccessToken(null)

      console.log('Logout successful')
    } catch (error: unknown) {
      console.error('Logout error:', error)
      setAccessToken(null)
      throw handleError(error)
    }
  },

  /**
   * Get current user profile
   */
  async getCurrentUser(): Promise<User> {
    try {
      console.log('Fetching current user...')

      const response = await api.get<{ success: true; data: User }>('/auth/me')

      console.log('User fetched:', response.data.data.email)

      return response.data.data
    } catch (error) {
      console.error('Fetch user failed:', error)
      throw handleError(error)
    }
  },

  /**
   * Verify if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!getAccessToken()
  },

}