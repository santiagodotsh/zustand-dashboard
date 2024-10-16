import { createBrowserRouter } from 'react-router-dom'
import { Root } from '../root'
import { AuthLayout } from '../layouts/auth-layout'
import { DashboardLayout } from '../layouts/dashboard-layout'
import { DashboardPage } from '../pages/dashboard/dashboard-page'
import { BearPage } from '../pages/basic/bear-page'
import { PersonPage } from '../pages/basic/person-page'
import { JiraPage } from '../pages/objects/jira-page'
import { WeddingInvitationPage } from '../pages/slices/wedding-invitation-page'
import { LoginPage } from '../pages/auth/login-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <DashboardPage />
          },
          {
            path: 'bears',
            element: <BearPage />
          },
          {
            path: 'persons',
            element: <PersonPage />
          },
          {
            path: 'tasks',
            element: <JiraPage />
          },
          {
            path: 'wedding',
            element: <WeddingInvitationPage />
          }
        ]
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />
          }
        ]
      }
    ]
  }
])
