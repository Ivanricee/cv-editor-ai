/* eslint-disable react-hooks/exhaustive-deps */
import { APP_API } from '@/app/const'
import { getCV, getToken } from '@/services/getCurriculum'
import { useBoundStore } from '@/stores/useBoundStore'
import { type infojobState } from '@/types/types'
import { useEffect, useState } from 'react'
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
      const tokenData = await fetch(`${APP_API}?code=${code}`)
      const { access_token, refresh_token, error_description } =
        await tokenData.json()

      if (access_token) {
        setToken({ access_token, refresh_token })
      } else {
        console.log('else error ', error_description)
        setInfojobState({ loading: false, error: error_description })
      }
    }
    const getInfojobsCV = async () => {
      const getCV = await fetch(`${APP_API}?get_cv=get_cv`)
      const dataCvList = await getCV.json()

      await setCVList(dataCvList)
      setInfojobState({ loading: false, error: null })
    }
    //Si no hay access_token en suztand --> fetchToken
    if (!token.access_token) {
      fetchToken()
    } else {
      getInfojobsCV()
    }
  }, [token])
}
