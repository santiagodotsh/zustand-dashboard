import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'
import type { FormEvent } from 'react'

export function LoginPage() {
  const navigate = useNavigate()

  const loginUser = useAuthStore(state => state.loginUser)

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { email, password, remember } = event.target as typeof event.target & {
      email: { value: string }
      password: { value: string }
      remember: { checked: boolean }
    }

    try {
      await loginUser(email.value, password.value)
      
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className='text-2xl font-semibold mb-4'>
        Login
      </h1>

      <form onSubmit={handleOnSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-600'>
            Email
          </label>

          <input
            type='email'
            name='email'
            autoComplete='off'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-600'>
            Password
          </label>

          <input
            type='password'
            name='password'
            autoComplete='off'
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            name='remember'
            className='text-blue-500'
          />

          <label className='text-gray-600 ml-2'>
            Remember Me
          </label>
        </div>
        
        <div className='mb-6 text-blue-500'>
          <a href='#' className='hover:underline'>
            Forgot Password?
          </a>
        </div>

        <button type='submit' className='bg-indigo-600'>
          Login
        </button>
      </form>

      <div className='mt-6 text-blue-500 text-center'>
        <a href='#' className='hover:underline'>
          Sign up Here
        </a>
      </div>
    </>
  )
}
