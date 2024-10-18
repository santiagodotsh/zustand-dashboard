import type { StateCreator } from 'zustand'

export interface DateSlice {
  eventDate: number

  eventYYYYMMDD: () => string
  eventHHMM: () => string

  setEventDate: (value: string) => void
  setEventTime: (value: string) => void
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  eventDate: new Date().getTime(),

  eventYYYYMMDD: () => new Date(get().eventDate).toISOString().split('T')[0],
  eventHHMM: () => {
    const hours = new Date(get().eventDate).getHours().toString().padStart(2, '0')
    const minutes = new Date(get().eventDate).getMinutes().toString().padStart(2, '0')

    return `${hours}:${minutes}`
  },

  setEventDate: value => set(state => {
    const date = new Date(value)

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate() + 1

    const newDate = new Date(state.eventDate)
    newDate.setFullYear(year, month, day)

    return { eventDate: newDate.getTime() }
  }),
  setEventTime: value => set(state => {
    const hours = parseInt(value.split(':')[0])
    const minutes = parseInt(value.split(':')[1])

    const newDate = new Date(state.eventDate)
    newDate.setHours(hours, minutes)

    return { eventDate: newDate.getTime() }
  })
})
