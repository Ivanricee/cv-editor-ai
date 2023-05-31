import { useBoundStore } from '@/stores/useBoundStore'
import { type CVList } from '@/types/types'
import { useEffect, useState } from 'react'

export default function CVEdit() {
  const [cvInfo, setCvInfo] = useState<CVList | null>(null)
  const currentCV = useBoundStore((state) => state.currentCV)
  const CVList = useBoundStore((state) => state.CVList)

  useEffect(() => {
    if (currentCV) {
      const findCvList = CVList.find((cvItem) => {
        return currentCV === cvItem.cv.id
      })
      if (findCvList) setCvInfo(findCvList)
    }
  }, [currentCV])
  console.log(cvInfo)
  if (cvInfo) {
    const { cv, education, experience, futureJob, personalData } = cvInfo
    const birthday = new Date(personalData.birthDay as Date)
    const getDate = (date: Date) => new Date(date).toLocaleDateString()

    return (
      <>
        <div className="w-screen px-6">
          <h1 className="font-bold text-2xl">{cv.name}</h1>
          {cv.principal && (
            <p className="text-sm text-slate-500">CV principal</p>
          )}
        </div>
        <div className="flex gap-4 w-screen py-4 px-6">
          <section className="w-9/12">
            <section
              aria-label="personal data"
              className="card shadow-2xl bg-slate-900 text-neutral-content rounded-md mb-6 w-full"
            >
              <div className="card-body justify-center">
                <h2 className="card-title text-left font-normal">
                  {personalData.name} {personalData.surname1}
                  {personalData.surname2}
                </h2>
                <small className="text-slate-500 leading-3 text-xs">
                  {birthday.toLocaleDateString()}
                </small>
                <small className="text-slate-500 leading-3  text-xs">
                  {personalData.cityName}
                </small>
                <p className="text-sm">{personalData.email}</p>
                <p className="text-sm">{personalData.internationalPhone}</p>
              </div>
            </section>
            <section
              aria-label="experiencia laboral"
              className="card  shadow-2xl bg-slate-900 text-neutral-content rounded-md w-full"
            >
              <div className="card-body justify-center">
                {experience.map((experienceItm) => {
                  return (
                    <>
                      <h2
                        key={experienceItm.id}
                        className="card-title text-left font-normal"
                      >
                        {experienceItm.job}
                      </h2>
                      <p>{experienceItm.company}</p>
                      <small>
                        {getDate(experienceItm.startingDate)}
                        {' - '}
                        {getDate(experienceItm.finishingDate)}
                      </small>
                    </>
                  )
                })}
              </div>
            </section>
          </section>

          <section aria-label="Form otions" className="w-3/12">
            <div
              aria-label="Cv List"
              className="card shadow-2xl bg-slate-800 text-neutral-content rounded-md"
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title">Curriculum:</h2>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
  return <h1>Loading data</h1>
}
