import { create } from 'zustand'
import { type appSlice, type cvSlice, type infojobsSlice } from '@/types/types'
import { createInfojobsSlice } from './createInfojobsSlice'
import { createCvSlice } from './createCvSlice'
import { createAppSlice } from './createAppSlice'

export const useBoundStore = create<infojobsSlice & cvSlice & appSlice>()(
  (...a) => ({
    ...createInfojobsSlice(...a),
    ...createCvSlice(...a),
    ...createAppSlice(...a),
  })
)
