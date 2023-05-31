import { cvSlice } from '@/types/types'
import { StateCreator } from 'zustand'

export const createCvSlice: StateCreator<cvSlice> = (set, get) => ({
  CVList: [],
  currentCV: null,

  setCVList: (CVList) =>
    set((state) => ({
      CVList: [...state.CVList, ...CVList],
    })),
  setCurrentCV: (currentCV) =>
    set({
      currentCV,
    }),
})
