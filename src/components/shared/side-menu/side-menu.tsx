import { NavLink } from 'react-router-dom'
import {
  IoSpeedometerOutline,
  IoPawOutline,
  IoLogOutOutline,
  IoHeartOutline,
  IoListOutline,
  IoAccessibilityOutline
} from 'react-icons/io5'
import { SideMenuItem } from './side-menu-item'
import type { IconType } from 'react-icons'
import './side-menu.css'

interface MenuItem {
  title: string
  subTitle: string
  href: string
  Icon: IconType
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    subTitle: 'View data',
    href: '/dashboard',
    Icon: IoSpeedometerOutline
  },
  {
    title: 'Bears',
    subTitle: 'Bear counter',
    href: '/dashboard/bears',
    Icon: IoPawOutline
  },
  {
    title: 'Persons',
    subTitle: 'First and last name',
    href: '/dashboard/persons',
    Icon: IoAccessibilityOutline
  },
  {
    title: 'Tasks',
    subTitle: 'Task list',
    href: '/dashboard/tasks',
    Icon: IoListOutline
  },
  {
    title: 'Wedding',
    subTitle: 'Wedding guests',
    href: '/dashboard/wedding',
    Icon: IoHeartOutline
  }
]

export function SideMenu() {
  return (
    <div id='menu' className='bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll'>
      <div id='logo' className='my-4 px-6'>
        <h1 className='text-lg md:text-2xl font-bold text-white'>
          Zustand
          <span className='text-blue-500 text-xs'> StateManager</span>
          .
        </h1>

        <p className='text-slate-500 text-sm'>
          Simple but powerful state manager.
        </p>
      </div>

      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>
          Welcome,
        </p>

        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <img
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80'
              className='rounded-full w-8 h-8'
              alt=''
            />
          </span>

          <span className='text-sm md:text-base font-bold'>
            Edward Tompson
          </span>
        </a>
      </div>

      <nav id='nav' className='w-full px-6'>
        {menuItems.map(item => (
          <SideMenuItem key={item.href} {...item} />
        ))}

        <NavLink to={'/auth/login'} className='mt-10'>
          <div>
            <IoLogOutOutline />
          </div>

          <span className='text-lg text-slate-300 font-bold leading-5'>
            Logout
          </span>
        </NavLink>
      </nav>
    </div>
  )
}
