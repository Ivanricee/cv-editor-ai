import { useEffect, useState } from 'react'
import { useBoundStore } from '@/stores/useBoundStore'
import { type CVList } from '@/types/types'
import { APP_API } from '@/app/const'
import { PersonalData } from './PersonalData'
import { WorkExperience } from './WorkExperience'
import { Education } from './Education'
import { StatusAndPreferences } from './StatusAndPreferences'
import { SkeletonCV } from '../SkeletonCV'
import { CVSettings } from './CVSettings'

export default function CVEdit() {
  const [cvInfo, setCvInfo] = useState<CVList | null>(null)
  const currentCVCode = useBoundStore((state) => state.currentCVCode)
  const setRemainingCvData = useBoundStore((state) => state.setRemainingCvData)
  const CVList = useBoundStore((state) => state.CVList)

  const handleClickRefreshCVInfo = () => setCvInfo(null)

  useEffect(() => {
    if (currentCVCode) {
      const getRemainingCvData = async () => {
        const remainCvData = await fetch(
          `${APP_API}/getRemainCv?cvCode=${currentCVCode}`
        )
        if (!remainCvData.ok) {
          throw new Error(`Error HTTP: ${remainCvData.status}`)
        }
        setRemainingCvData(currentCVCode, await remainCvData.json())
      }

      const cvListRemain = CVList.find(
        (cvItem) =>
          currentCVCode === cvItem.cv?.code && Object.keys(cvItem).length > 1
      )
      cvListRemain ? setCvInfo(cvListRemain) : getRemainingCvData()
    }
  }, [currentCVCode, CVList, setRemainingCvData])

  if (!cvInfo) return <SkeletonCV />

  const { cv, education, experience, futureJob, personalData } = cvInfo
  return (
    <>
      <div className="w-full px-6">
        <h1 className="font-extrabold text-2xl">{cv?.name}</h1>
        {cv?.principal && <p className="text-sm text-zinc-500">CV principal</p>}
      </div>
      <div
        className="flex flex-wrap-reverse w-[450px] md:flex-nowrap gap-4 py-4 px-6 md:min-w-[750px]
        lg:w-[900px] justify-center content-center"
      >
        <section className="w-full md:w-9/12">
          <PersonalData personalData={personalData} />
          <WorkExperience workExperience={experience} />
          <Education education={education} />
          <StatusAndPreferences statusAndPreferences={futureJob} />
        </section>
        <section aria-label="Form otions" className="w-1/2 md:w-3/12">
          <CVSettings handleClickRefreshCVInfo={handleClickRefreshCVInfo} />
        </section>
      </div>
    </>
  )
}
