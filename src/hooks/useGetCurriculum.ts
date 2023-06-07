/* eslint-disable react-hooks/exhaustive-deps */
import { APP_API } from '@/app/const'
import { useBoundStore } from '@/stores/useBoundStore'
import { type infojobState } from '@/types/types'
import { useEffect } from 'react'
interface Props {
  isFromInfojobs: infojobState
  code: string
}
export function useGetCurriculum({ isFromInfojobs, code }: Props) {
  const infojobState = useBoundStore((state) => state.infojobState)
  const token = useBoundStore((state) => state.token)
  const CVList = useBoundStore((state) => state.CVList)

  const setInfojobState = useBoundStore((state) => state.setInfojobState)
  const setToken = useBoundStore((state) => state.setToken)
  const setCVList = useBoundStore((state) => state.setCVList)

  useEffect(() => {
    const fetchToken = async () => {
      const tokenData = await fetch(`${APP_API}/getToken?code=${code}`)
      const { success, error, error_description } = await tokenData.json()
      console.log('tokenData------------ ', await success)
      if (success) {
        setToken(success)
      } else {
        console.log('else error ', error_description)
        setInfojobState({ loading: false, error: error_description })
      }
    }
    const getInfojobsCV = async () => {
      const getCV = await fetch(`${APP_API}/getCvs`)

      const dataCvList = await getCV.json()
      await setCVList(dataCvList)
      setInfojobState({ loading: false, error: null })
    }
    token ? getInfojobsCV() : fetchToken()
  }, [token])
}
