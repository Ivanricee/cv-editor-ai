import { infojobsSlice } from '@/types/types'
import { StateCreator } from 'zustand'

export const createInfojobsSlice: StateCreator<infojobsSlice> = (set) => ({
  infojobState: {
    loading: true,
    error: null,
  },
  infojobsCreateNew: null,
  token: {
    access_token: null,
    refresh_token: null,
  },
  setInfojobState: (infojobState) =>
    set({
      infojobState,
    }),
  setInfojobsCreateNew: (infojobsCreateNew) =>
    set({
      infojobsCreateNew,
    }),

  setToken: (token) =>
    set({
      token: {
        access_token: token.access_token,
        refresh_token: token.refresh_token,
      },
    }),
})
