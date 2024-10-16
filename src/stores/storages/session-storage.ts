import { createJSONStorage, type StateStorage } from 'zustand/middleware'

const storageApi: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    return sessionStorage.getItem(name)
  },
  setItem: function (name: string, value: string): unknown | Promise<unknown> {
    return sessionStorage.setItem(name, value)
  },
  removeItem: function (name: string): unknown | Promise<unknown> {
    return sessionStorage.removeItem(name)
  }
}

export const customSessionStorage = createJSONStorage(() => storageApi)
