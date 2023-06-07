import { infojobsSlice } from '@/types/types'
import { StateCreator } from 'zustand'

export const createInfojobsSlice: StateCreator<infojobsSlice> = (set) => ({
  infojobState: {
    loading: true,
    error: null,
  },
  infojobsCreateNew: null,
  token: false,
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
      token: true,
    }),
})
