import type { StateCreator } from 'zustand'

export interface PersonSlice {
  firstName: string
  lastName: string
  
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
}

export const createPersonSlice: StateCreator<PersonSlice> = set => ({
  firstName: '',
  lastName: '',

  setFirstName: value => set({ firstName: value }),
  setLastName: value => set({ lastName: value })
})
