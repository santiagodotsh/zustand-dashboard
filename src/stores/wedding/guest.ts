import type { StateCreator } from 'zustand'

export interface GuestSlice {
  guestCount: number

  setGuestCount: (value: number) => void
}

export const createGuestSlice: StateCreator<GuestSlice> = set => ({
  guestCount: 0,

  setGuestCount: value => set({ guestCount: value > 0 ? value : 0 })
})
