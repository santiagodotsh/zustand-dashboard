import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoInformationOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline
} from 'react-icons/io5'
import { useBearStore } from '../../stores/bears'
import { usePersonStore } from '../../stores/persons'
import { useTaskStore } from '../../stores/tasks'
import { useAuthStore } from '../../stores/auth'
import { WhiteCard } from '../../components/shared/cards/white-card'
import { RequestInfo } from '../../components/shared/request-info'

export function DashboardPage() {
  const firstName = usePersonStore(state => state.firstName)
  const tasks = useTaskStore(state => state.tasks)
  const user = useAuthStore(state => (state.user))

  const totalBears = useBearStore(state => state.totalBears)

  return (
    <>
      <h1>Dashboard</h1>
      <p>Collective information from several Zustand stores</p>

      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <WhiteCard centered>
          <IoPawOutline size={50} className='text-indigo-600' />

          <h2>Bears</h2>
          <p>{totalBears()}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className='text-indigo-600' />

          <h2>Persons</h2>
          <p>{firstName}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoListOutline size={50} className='text-indigo-600' />

          <h2>Tasks</h2>
          <p>{Object.keys(tasks).length}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoHeartOutline size={50} className='text-indigo-600' />

          <h2>Wedding</h2>
          <p>Information</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoLockClosedOutline size={50} className='text-indigo-600' />

          <h2>Auth</h2>
          <p>{user?.email}</p>
        </WhiteCard>

        <WhiteCard className='col-span-3'>
          <IoInformationOutline size={50} className='text-indigo-600' />

          <RequestInfo />
        </WhiteCard>
      </div>
    </>
  )
}
