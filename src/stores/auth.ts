import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { AuthService } from '../services/auth'
import { AuthStatus } from '../interfaces/auth'
import type { User } from '../interfaces/user'

interface AuthState {
  status: AuthStatus
  token?: string
  user?: User

  loginUser: (email: string, password: string) => Promise<void>
  checkAuthStatus: () => Promise<void>
  logoutUser: () => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        status: AuthStatus.Pending,
        token: undefined,
        user: undefined,

        loginUser: async (email, password) => {
          try {
            const { token, ...user } = await AuthService.login(email, password)

            set({
              status: AuthStatus.Authorized,
              token,
              user
            })
          } catch (error) {
            set({
              status: AuthStatus.Unauthorized,
              token: undefined,
              user: undefined
            })

            throw new Error('Unauthorized')
          }
        },
        checkAuthStatus: async () => {
          try {
            const { token, ...user } = await AuthService.checkStatus()

            set({
              status: AuthStatus.Authorized,
              token,
              user
            })
          } catch (error) {
            set({
              status: AuthStatus.Unauthorized,
              token: undefined,
              user: undefined
            })

            throw new Error('Unauthorized')
          }
        },
        logoutUser: () => set({
          status: AuthStatus.Unauthorized,
          token: undefined,
          user: undefined
        })
      }),
      {
        name: 'auth'
      }
    )
  )
)
