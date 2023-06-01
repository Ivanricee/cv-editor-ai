import { useBoundStore } from '@/stores/useBoundStore'
import { type CVList } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import BadgeIntroduction from './BadgeIntroduction'

export default function CVEdit() {
  const [cvInfo, setCvInfo] = useState<CVList | null>(null)

  const currentCV = useBoundStore((state) => state.currentCV)
  const setCurrentCV = useBoundStore((state) => state.setCurrentCV)
  const CVList = useBoundStore((state) => state.CVList)

  useEffect(() => {
    if (currentCV) {
      const findCvList = CVList.find((cvItem) => {
        return currentCV === cvItem.cv.id
      })
      if (findCvList) setCvInfo(findCvList)
    }
  }, [currentCV])

  if (cvInfo) {
    const { cv, education, experience, futureJob, personalData } = cvInfo
    const birthday = new Date(personalData.birthDay as Date)
    const getDate = (date: Date) => new Date(date).toDateString()

    const handleClickSelected = (e: React.MouseEvent<HTMLInputElement>) => {
      const idCv = Number((e.target as HTMLInputElement).value)
      setCurrentCV(idCv)
    }

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
              <div className="card-body justify-center p-6">
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
              className="card  shadow-2xl bg-slate-900 text-neutral-content rounded-md mb-6  w-full"
            >
              <div className="card-body justify-center p-6">
                <h2>Experiencia laboral</h2>
                <div className="divider  before:bg-slate-950 after:bg-slate-950 my-2 -mx-5"></div>
                {experience.map((experienceItm) => {
                  return (
                    <div key={experienceItm.id}>
                      <BadgeIntroduction
                        finishDate={experienceItm.finishingDate}
                        startDate={experienceItm.startingDate}
                        subtitle={experienceItm.company}
                        title={experienceItm.job}
                      />
                      <div className="indicator w-full pt-4">
                        <div className="card border border-blue-950 rounded-md w-full">
                          <div className="card-body p-4">
                            <small className="text-slate-500">
                              Descripción
                            </small>
                            <p>{experienceItm.description}</p>
                            <div className="inline-flex gap-2 flex-wrap pt-4">
                              {experienceItm.expertise.map((skill) => {
                                return (
                                  <div
                                    key={skill.skill}
                                    className="badge badge-secondary badge-outline"
                                  >
                                    <small className="text-xs">
                                      {skill.skill}
                                    </small>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
            <section
              aria-label="Estudios"
              className="card  shadow-2xl bg-slate-900 text-neutral-content rounded-md mb-6  w-full"
            >
              <div className="card-body justify-center p-6">
                <h2>Estudios</h2>
                <div className="divider  before:bg-slate-950 after:bg-slate-950 my-2 -mx-5"></div>
                <div className="flex gap-11 flex-wrap">
                  {education.map((educItem) => {
                    return (
                      <div key={educItem.id} className="w-full">
                        <BadgeIntroduction
                          finishDate={educItem.finishingDate}
                          startDate={educItem.startingDate}
                          subtitle={educItem.institutionName}
                          title={educItem.courseCode}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          </section>

          <section aria-label="Form otions" className="w-3/12">
            <div
              aria-label="Cv List"
              className="card shadow-2xl bg-slate-900 text-neutral-content rounded-md"
            >
              <div className="card-body  text-left p-6">
                <h2 className="card-title  text-left font-normal text-base text-slate-400">
                  <div className="indicator w-full pt-4">
                    <div className="card border border-blue-950 rounded-md w-full">
                      <div className="card-body p-4">
                        <small className="text-slate-500">Curriculum</small>
                        <section className="form-control items-center">
                          {CVList &&
                            CVList.map((cvItem, i) => {
                              return (
                                <div key={cvItem.cv.id}>
                                  <label
                                    key={cvItem.cv.id}
                                    className="label cursor-pointer gap-8 w-1/2 md:w-1/3  content-center"
                                  >
                                    <span className="label-text text-accent uppercase">
                                      {cvItem.cv.name}
                                    </span>
                                    <input
                                      type="radio"
                                      name="radio-3"
                                      className="radio checked:bg-blue-500"
                                      onClick={handleClickSelected}
                                      value={cvItem.cv.id || ''}
                                      defaultChecked={
                                        cvItem.cv.id === currentCV
                                      }
                                    />
                                  </label>
                                </div>
                              )
                            })}
                        </section>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <h1>Loading data</h1>
    </div>
  )
}
