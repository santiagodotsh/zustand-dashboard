import { useBearStore } from '../../stores/bears'
import { WhiteCard } from '../../components/shared/cards/white-card'
import { useShallow } from 'zustand/shallow'

export function BearPage() {
  return (
    <>
      <h1>Bear Counter</h1>
      <p>Simple state management with Zustand</p>

      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        <BlackBears />
        <PolarBears />
        <PandaBears />

        <BearsDisplay />
      </div>
    </>
  )
}

function BlackBears() {
  const blackBears = useBearStore(state => state.blackBears)
  
  const increaseBlackBears = useBearStore(state => state.increaseBlackBears)

  return (
    <WhiteCard centered>
      <h2>Black Bears</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increaseBlackBears(-1)}>
          -1
        </button>
        <span className='text-3xl mx-2 lg:mx-10'>
          {blackBears}
        </span>
        <button onClick={() => increaseBlackBears(+1)}>
          +1
        </button>
      </div>
    </WhiteCard>
  )
}

function PolarBears() {
  const polarBears = useBearStore(state => state.polarBears)
  
  const increasePolarBears = useBearStore(state => state.increasePolarBears)

  return (
    <WhiteCard centered>
      <h2>Polar Bears</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increasePolarBears(-1)}>
          -1
        </button>
        <span className='text-3xl mx-2 lg:mx-10'>
          {polarBears}
        </span>
        <button onClick={() => increasePolarBears(+1)}>
          +1
        </button>
      </div>
    </WhiteCard>
  )
}

function PandaBears() {
  const pandaBears = useBearStore(state => state.pandaBears)
  
  const increasePandaBears = useBearStore(state => state.increasePandaBears)

  return (
    <WhiteCard centered>
      <h2>Panda Bears</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => increasePandaBears(-1)}>
          -1
        </button>
        <span className='text-3xl mx-2 lg:mx-10'>
          {pandaBears}
        </span>
        <button onClick={() => increasePandaBears(+1)}>
          +1
        </button>
      </div>
    </WhiteCard>
  )
}

function BearsDisplay() {
  const bears = useBearStore(useShallow(state => state.bears))
  
  const doNothing = useBearStore(state => state.doNothing)
  const addBears = useBearStore(state => state.addBears)
  const clearBears = useBearStore(state => state.clearBears)

  return (
    <WhiteCard>
      <h1>Bears</h1>

      <div className='flex flex-col space-y-5'>
        <button onClick={() => doNothing()}>
          Do Nothing
        </button>

        <button onClick={() => addBears()}>
          Add Bears
        </button>

        <button onClick={() => clearBears()}>
          Clear Bears
        </button>
      </div>
      
      <pre>
        {JSON.stringify(bears, null, 2)}
      </pre>
    </WhiteCard>
  )
}
