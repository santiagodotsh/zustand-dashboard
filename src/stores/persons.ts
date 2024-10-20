import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { customFirebaseStorage } from './storages/firebase-storage'
import { logger } from './middlewares/logger'
import { useWeddingBoundStore } from './wedding'

interface PersonState {
  firstName: string
  lastName: string
  
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
}

const storeApi: StateCreator<PersonState, [['zustand/devtools', never]]> = set => ({
  firstName: '',
  lastName: '',

  setFirstName: value => set({ firstName: value }, false, 'setFirstName' ),
  setLastName: value => set({ lastName: value }, false, 'setLastName' )
})

export const usePersonStore = create<PersonState>()(
  logger(
    devtools(
      persist(
        storeApi,
        {
          name: 'person',
          storage: customFirebaseStorage
        }
      )
    )
  )
)

usePersonStore.subscribe((nextState, _prevState) => {
  useWeddingBoundStore.getState().setFirstName(nextState.firstName)
  useWeddingBoundStore.getState().setLastName(nextState.lastName)
})
