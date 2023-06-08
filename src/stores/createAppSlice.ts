import { INFOJOBS_MODAL_REQ } from '@/app/const'
import { type appSlice } from '@/types/types'
import { StateCreator } from 'zustand'

export const createAppSlice: StateCreator<appSlice> = (set) => ({
  isCloseModal: { status: false, request: INFOJOBS_MODAL_REQ.GET_CV },
  setIsCloseModal: (request) =>
    set((prevState) => ({
      isCloseModal: { status: !prevState.isCloseModal.status, request },
    })),
})
