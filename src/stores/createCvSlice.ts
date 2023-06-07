import { cvSlice } from '@/types/types'
import { StateCreator } from 'zustand'

export const createCvSlice: StateCreator<cvSlice> = (set, get) => ({
  CVList: [],
  currentCVCode: null,
  setCVList: (CVList) =>
    set({
      CVList: [...CVList],
    }),
  setRemainingCvData: (code, remainCvData) =>
    set((prevCvList) => {
      const indexToBeEdited = prevCvList.CVList.findIndex(
        (cvItem) => cvItem.cv?.code === code
      )
      let updatedCVList = [...prevCvList.CVList]
      const cvEdited = {
        cv: prevCvList.CVList[indexToBeEdited].cv,
        ...remainCvData,
      }
      updatedCVList[indexToBeEdited] = cvEdited

      return {
        CVList: [...updatedCVList],
      }
    }),
  setCurrentCvCode: (currentCVCode) =>
    set({
      currentCVCode,
    }),
})
