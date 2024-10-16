import { create, type StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'
import { customStorage } from './customStorage'

interface PersonState {
  firstName: string
  lastName: string
  
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
}

const storeApi: StateCreator<PersonState> = (set) => ({
  firstName: '',
  lastName: '',

  setFirstName: value => set({ firstName: value }),
  setLastName: value => set({ lastName: value })
})

export const usePersonStore = create<PersonState>()(
  persist(
    storeApi,
    {
      name: 'person',
      storage: customStorage
    }
  )
)
