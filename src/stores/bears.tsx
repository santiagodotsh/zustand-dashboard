import { create } from 'zustand'

interface BearState {
  blackBears: number
  polarBears: number
  pandaBears: number

  bears: Bear[]

  computed: { totalBears: number }

  increaseBlackBears: (by: number) => void
  increasePolarBears: (by: number) => void
  increasePandaBears: (by: number) => void

  doNothing: () => void

  addBears: () => void
  clearBears: () => void
}

interface Bear {
  id: number
  name: string
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 0,
  polarBears: 0,
  pandaBears: 0,

  bears: [],

  computed: {
    get totalBears() {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length
    }
  },

  increaseBlackBears: (by) => set(state => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by) => set(state => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by) => set(state => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set(state => ({bears: [...state.bears] })),

  addBears: () => set(state => ({
    bears: [
      ...state.bears,
      {
        id: state.bears.length + 1,
        name: `Bear #${state.bears.length + 1}`
      }
    ]
  })),
  clearBears: () => set({ bears: [] })
}))
