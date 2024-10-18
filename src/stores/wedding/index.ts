import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createPersonSlice, type PersonSlice } from './person'
import { createGuestSlice, type GuestSlice } from './guest'
import { createDateSlice, type DateSlice } from './date'
import { createConfirmationSlice, type ConfirmationSlice } from './confirmation'

type WeddingState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice

export const useWeddingBoundStore = create<WeddingState>()(
  devtools(
    persist(
      (...a) => ({
        ...createPersonSlice(...a),
        ...createGuestSlice(...a),
        ...createDateSlice(...a),
        ...createConfirmationSlice(...a)
      }),
      {
        name: 'wedding'
      }
    )
  )
)
