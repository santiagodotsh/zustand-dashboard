import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../stores/auth'
import { AuthStatus } from '../interfaces/auth'

export function AuthLayout() {
  const status = useAuthStore(state => state.status)
  const checkAuthStatus = useAuthStore(state => state.checkAuthStatus)

  if (status === AuthStatus.Pending) {
    checkAuthStatus()

    return <>Loading...</>
  }

  if (status === AuthStatus.Authorized) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className='bg-gray-100 flex justify-center items-center h-screen'>
      <div className='w-1/2 h-screen hidden lg:flex lg:flex-col items-center justify-center bg-indigo-700'>
        <span className='text-white font-bold text-9xl'>
          Zustand
        </span>
        
        {/* <img
          src='https://placehold.co/1440/667fff/ffffff.png?text=Zustand&font=Montserrat'
          className='object-cover w-full h-full'
          alt='Placeholder Image'
        /> */}
      </div>

      <div className='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2'>
        <Outlet />
      </div>
    </div>
  )
}
