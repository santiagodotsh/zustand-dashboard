import { createJSONStorage, type StateStorage } from 'zustand/middleware'

const firebaseUrl: string = import.meta.env.VITE_FIREBASE_URL

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    return JSON.stringify(await fetch(`${firebaseUrl}/${name}.json`).then(res => res.json()))
  },
  setItem: async function (name: string, value: string): Promise<unknown> {
    return await fetch(`${firebaseUrl}/${name}.json`, { method: 'PUT', body: value })
  },
  removeItem: function (): unknown | Promise<unknown> {
    return
  }
}

export const customFirebaseStorage = createJSONStorage(() => storageApi)
