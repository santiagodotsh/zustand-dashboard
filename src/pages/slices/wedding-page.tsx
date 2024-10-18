import { useWeddingBoundStore } from '../../stores/wedding'
import { WhiteCard } from '../../components/shared/cards/white-card'
import type { FormEvent } from 'react'

export function WeddingPage() {
  const firstName = useWeddingBoundStore(state => state.firstName)
  const lastName = useWeddingBoundStore(state => state.lastName)
  const guestCount = useWeddingBoundStore(state => state.guestCount)
  const eventDate = useWeddingBoundStore(state => state.eventDate)
  const eventYYYYMMDD = useWeddingBoundStore(state => state.eventYYYYMMDD())
  const eventHHMM = useWeddingBoundStore(state => state.eventHHMM())
  const isConfirmed = useWeddingBoundStore(state => state.isConfirmed)

  const setFirstName = useWeddingBoundStore(state => state.setFirstName)
  const setLastName = useWeddingBoundStore(state => state.setLastName)
  const setGuestCount = useWeddingBoundStore(state => state.setGuestCount)
  const setEventDate = useWeddingBoundStore(state => state.setEventDate)
  const setEventTime = useWeddingBoundStore(state => state.setEventTime)
  const setIsConfirmed = useWeddingBoundStore(state => state.setIsConfirmed)

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({
      firstName,
      lastName,
      guestCount,
      eventDate,
      isConfirmed
    })
  }

  return (
    <>
      <h1>Wedding invitation</h1>
      <p>Zustand segmented into slices</p>

      <hr />

      <WhiteCard className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form onSubmit={handleOnSubmit}>
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

            <div className='mb-5'>
              <label className='mb-3 block text-base font-medium text-[#07074D]'>
                How many guests will you bring?
              </label>

              <input
                id='guestNumber'
                type='number'
                name='guestNumber'
                value={guestCount}
                onChange={e => setGuestCount(+e.target.value)}
                className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                min='0'
                placeholder='5'
              />
            </div>

            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Event date
                  </label>

                  <input
                    id='eventDate'
                    type='date'
                    name='eventDate'
                    value={eventYYYYMMDD}
                    onChange={e => setEventDate(e.target.value)}
                  />
                </div>
              </div>

              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>
                    Event time
                  </label>

                  <input
                    id='eventTime'
                    type='time'
                    name='eventTime'
                    value={eventHHMM}
                    onChange={e => setEventTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='mb-5'>
              <label className='mb-3 block text-base font-medium text-[#07074D]'>
                Will you come too?
              </label>

              <div className='flex items-center space-x-6'>
                <div className='flex items-center'>
                  <input
                    id='radioButton1'
                    type='radio'
                    name='isComing'
                    checked={isConfirmed}
                    onChange={() => setIsConfirmed(true)}
                    className='h-5 w-5'
                  />

                  <label className='pl-3 text-base font-medium text-[#07074D]'>
                    Yes
                  </label>
                </div>

                <div className='flex items-center'>
                  <input
                    id='radioButton2'
                    type='radio'
                    name='isComing'
                    checked={!isConfirmed}
                    onChange={() => setIsConfirmed(false)}
                    className='h-5 w-5'
                  />

                  <label className='pl-3 text-base font-medium text-[#07074D]'>
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button>Send</button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  )
}
