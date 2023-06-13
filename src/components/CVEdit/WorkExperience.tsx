import { type experience } from '@/types/types'
import BadgeIntroduction from './BadgeIntroduction'
import { ModalEnhancerAI } from '../ModalEnhancerAI'
import { CV_TYPE_AI } from '@/app/const'
import { useEffect, useState } from 'react'

interface Props {
  workExperience?: experience[]
}
export function WorkExperience({ workExperience }: Props) {
  const [currentItem, setCurrentItem] = useState<experience | null>(null)

  const handleOpenAiBtn = (currentItm: experience) => {
    setCurrentItem({ ...currentItm })
  }
  useEffect(() => {
    if (currentItem) window.my_modal_3.showModal()
  }, [currentItem])
  return (
    <>
      {currentItem && (
        <ModalEnhancerAI
          cvItemData={currentItem}
          type={CV_TYPE_AI.W_EXPERIENCE}
        />
      )}
      <section
        aria-label="experiencia laboral"
        className="card shadow-lg mb-6  w-full "
      >
        <div className="card-body justify-center bg-base-200 p-6 rounded-xl">
          <h2 className="font-medium">Experiencia laboral</h2>
          <div className="divider before:bg-zinc-400 after:bg-zinc-400 my-2 -mx-3"></div>
          <div className="flex gap-10 w-full flex-wrap">
            {workExperience?.map((experienceItm) => {
              return (
                <div key={experienceItm.id} className="w-full group">
                  <div className="flex flex-nowrap justify-between items-center">
                    <BadgeIntroduction
                      finishDate={experienceItm.finishingDate}
                      startDate={experienceItm.startingDate}
                      subtitle={experienceItm.company}
                      title={experienceItm.job}
                    />
                    <button
                      className="btn btn-outline btn-primary btn-xs invisible group-hover:visible transition-all duration-100"
                      onClick={() => handleOpenAiBtn(experienceItm)}
                    >
                      Enhance with Ai
                    </button>
                  </div>

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
        </div>
      </section>
    </>
  )
}
