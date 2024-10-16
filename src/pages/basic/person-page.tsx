import { WhiteCard } from '../../components/shared/cards/white-card'
import { usePersonStore } from '../../stores/persons'

export const PersonPage = () => {
  const firstName = usePersonStore(state => state.firstName)
  const lastName = usePersonStore(state => state.lastName)

  const setFirstName = usePersonStore(state => state.setFirstName)
  const setLastName = usePersonStore(state => state.setLastName)

  return (
    <>
      <h1>Person</h1>
      <p>Information to be shared with another store, Session Storage, and Firebase</p>

      <hr />

      <WhiteCard className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form>
            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    First name
                  </label>
                  <input
                    id='firstName'
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder='First name'
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Last name
                  </label>
                  <input
                    id='lastName'
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder='Last name'
                  />
                </div>
              </div>
            </div>
  
            <pre className='bg-gray-200 p-5 rounded-[20px]'>
              {JSON.stringify({ firstName, lastName }, null, 2)}
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  )
}
