import { useBoundStore } from '@/stores/useBoundStore'
import { type CVList } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import BadgeIntroduction from './BadgeIntroduction'
import { APP_API } from '@/app/const'

export default function CVEdit() {
  const [cvInfo, setCvInfo] = useState<CVList | null>(null)

  const currentCVCode = useBoundStore((state) => state.currentCVCode)
  const setCurrentCvCode = useBoundStore((state) => state.setCurrentCvCode)
  const setRemainingCvData = useBoundStore((state) => state.setRemainingCvData)

  const CVList = useBoundStore((state) => state.CVList)

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

  if (cvInfo) {
    const { cv, education, experience, futureJob, personalData } = cvInfo
    const birthday = new Date(personalData?.birthDay as Date)
    const getDate = (date: Date) => new Date(date).toDateString()

    const handleClickSelected = (e: React.MouseEvent<HTMLInputElement>) => {
      const cvCode = (e.target as HTMLInputElement).value
      setCurrentCvCode(cvCode)
    }

    return (
      <>
        <div className="w-full px-6">
          <h1 className="font-extrabold text-2xl">{cv?.name}</h1>
          {cv?.principal && (
            <p className="text-sm text-zinc-500">CV principal</p>
          )}
        </div>
        <div
          className="flex flex-wrap-reverse w-[450px] md:flex-nowrap gap-4 py-4 px-6 md:min-w-[750px]
        lg:w-[900px] justify-center content-center"
        >
          <section className="w-full md:w-9/12">
            <section
              aria-label="personal data"
              className="card shadow-lg mb-6 w-full"
            >
              <div className="card-body bg-base-200 justify-center p-6 rounded-xl">
                <h2 className="card-title text-left font-bold ">
                  {personalData?.name} {personalData?.surname1}
                  {personalData?.surname2}
                </h2>
                <small className="text-neutral-500 leading-3 text-xs ">
                  {birthday.toLocaleDateString()}
                </small>
                <small className="text-neutral-500 leading-3  text-xs">
                  {personalData?.cityName}
                </small>
                <p className="text-sm">{personalData?.email}</p>
                <p className="text-sm">{personalData?.internationalPhone}</p>
              </div>
            </section>
            <section
              aria-label="experiencia laboral"
              className="card shadow-lg mb-6  w-full "
            >
              <div className="card-body justify-center bg-base-200 p-6 rounded-xl">
                <h2 className="font-medium">Experiencia laboral</h2>
                <div className="divider  before:bg-zinc-400 after:bg-zinc-400 my-2 -mx-3"></div>
                {experience?.map((experienceItm) => {
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
                            <small className="text-accent-content">
                              Descripción
                            </small>
                            <p>{experienceItm.description}</p>
                            <div className="inline-flex gap-2 flex-wrap pt-4">
                              {experienceItm.expertise.map((skill) => {
                                return (
                                  <div
                                    key={skill.skill}
                                    className="badge badge-accent"
                                  >
                                    <small className="text-xs ">
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
              className="card shadow-lg mb-6  w-full"
            >
              <div className="card-body bg-base-200 justify-center p-6 rounded-xl">
                <h2 className="font-medium">Estudios</h2>
                <div className="divider  before:bg-zinc-400 after:bg-zinc-400 my-2 -mx-3"></div>
                <div className="flex gap-11 flex-wrap">
                  {education?.map((educItem) => {
                    return (
                      <div key={educItem.id} className="w-full">
                        <BadgeIntroduction
                          finishDate={educItem.finishingDate}
                          startDate={educItem.startingDate}
                          subtitle={educItem.institutionName}
                          title={educItem.courseCode}
                          badge={educItem.educationLevelCode}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
            <section
              aria-label="Situación laboral y preferencias"
              className="card shadow-lg mb-6  w-full"
            >
              <div className="card-body bg-base-200 justify-center p-6 rounded-xl">
                <h2 className="font-medium">
                  Situación laboral y preferencias
                </h2>
                <div className="divider  before:bg-zinc-400 after:bg-zinc-400 my-2 -mx-3"></div>
                <div className="flex flex-col gap-3 flex-wrap">
                  {futureJob?.employmentStatus && (
                    <span>
                      <small className="text-zinc-500">Situación laboral</small>
                      <p>{futureJob.employmentStatus}</p>
                    </span>
                  )}
                  {futureJob?.preferredPosition && (
                    <span>
                      <small className="text-zinc-500">Puesto preferido</small>
                      <p>{futureJob.preferredPosition}</p>
                    </span>
                  )}
                  {futureJob?.motivationToChange && (
                    <span>
                      <small className="text-zinc-500">
                        Motivos para cambiar de empleo
                      </small>
                      <p>{futureJob.motivationToChange}</p>
                    </span>
                  )}
                  {futureJob?.futureJobGoals && (
                    <span>
                      <small className="text-zinc-500">
                        Objetivos laborales
                      </small>
                      <p>{futureJob.futureJobGoals}</p>
                    </span>
                  )}
                  {futureJob?.salaryMin && (
                    <span>
                      <small className="text-zinc-500">
                        Expectativas salariales
                      </small>
                      <p>
                        Minimo aceptado {futureJob.salaryMin} euros{' '}
                        {futureJob.salaryPeriod}, deseado{' '}
                        {futureJob.preferredSalary} {futureJob.salaryPeriod}
                      </p>
                    </span>
                  )}
                </div>
              </div>
            </section>
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
            </div>
          </section>
        </div>
      </>
    )
  }
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1>Loading data</h1>
    </div>
  )
}
