import { useBoundStore } from '@/stores/useBoundStore'
import { type CVList } from '@/types/types'
import { useEffect, useState } from 'react'
import { APP_API, INFOJOBS_MODAL_REQ } from '@/app/const'
import { PersonalData } from './PersonalData'
import { WorkExperience } from './WorkExperience'
import { Education } from './Education'
import { StatusAndPreferences } from './StatusAndPreferences'
import { SkeletonCV } from '../skeletonCV'

export default function CVEdit() {
  const [cvInfo, setCvInfo] = useState<CVList | null>(null)

  const currentCVCode = useBoundStore((state) => state.currentCVCode)
  const setCurrentCvCode = useBoundStore((state) => state.setCurrentCvCode)
  const setRemainingCvData = useBoundStore((state) => state.setRemainingCvData)
  const setIsCloseModal = useBoundStore((state) => state.setIsCloseModal)
  const CVList = useBoundStore((state) => state.CVList)
  const handleClickSelected = (e: React.MouseEvent<HTMLInputElement>) => {
    const cvCode = (e.target as HTMLInputElement).value
    setCvInfo(null)
    setCurrentCvCode(cvCode)
  }
  const handleCloseBtn = () => {
    setIsCloseModal(INFOJOBS_MODAL_REQ.EDIT_CV)
  }

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
      const cvListRemainData = CVList.find(
        (cvItem) =>
          currentCVCode === cvItem.cv?.code && Object.keys(cvItem).length > 1
      )
      cvListRemainData ? setCvInfo(cvListRemainData) : getRemainingCvData()
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
          <div className="card-body bg-base-200 justify-center p-3 lg:p-6 rounded-xl text-left shadow-md">
            <div className="card border border-blue-950 rounded-md w-full p-2">
              <small className="text-accent-content">Curriculum</small>
              <section className="form-control items-center">
                {CVList &&
                  CVList.map((cvItem, i) => {
                    return (
                      <div key={cvItem.cv?.id} className="w-full">
                        <label
                          key={cvItem.cv?.id}
                          className="label cursor-pointer gap-8 w-fullcontent-center"
                        >
                          <span className="label-text  overflow-hidden text-ellipsis">
                            {cvItem.cv?.name}
                          </span>
                          <input
                            type="radio"
                            name="radio-3"
                            className="radio checked:bg-default"
                            onClick={handleClickSelected}
                            value={cvItem.cv?.code || ''}
                            defaultChecked={cvItem.cv?.code === currentCVCode}
                          />
                        </label>
                      </div>
                    )
                  })}
              </section>
            </div>
            <div className="w-full text-center">
              <label
                htmlFor="cv-modal"
                className="btn btn-outline "
                onClick={handleCloseBtn}
              >
                Guardar en Infojobs
              </label>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
