import { AxiosError } from 'axios'
import { tesloShop } from '../api/teslo-shop'
import { User } from '../interfaces/user'

export class AuthService {
  static async login(email: string, password: string): Promise<User> {
    try {
      const { data } = await tesloShop.post<User>('/auth/signin', { email, password })

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data)

        throw new Error(error.response?.data)
      }

      console.error(error)

      throw new Error('Unable to login')
    }
  }

  static async checkStatus(): Promise<User> {
    try {
      const { data } = await tesloShop.get<User>('/auth/check-status')

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data)

        throw new Error(error.response?.data)
      }

      console.error(error)

      throw new Error('Unable to check status')
    }
  }
}