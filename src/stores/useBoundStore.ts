import { create } from 'zustand'
import { cvSlice, type infojobsSlice } from '@/types/types'
import { createInfojobsSlice } from './createInfojobsSlice'
import { createCvSlice } from './createCvSlice'

export const useBoundStore = create<infojobsSlice & cvSlice>()((...a) => ({
  ...createInfojobsSlice(...a),
  ...createCvSlice(...a),
}))
