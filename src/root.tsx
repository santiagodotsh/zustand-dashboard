import {
  Navigate,
  Outlet,
  useLocation
} from 'react-router-dom'

export function Root() {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <Navigate to='/dashboard' />
  }
  
  return (
    <main>
      <Outlet />
    </main>
  )
}
