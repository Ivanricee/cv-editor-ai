import { type experience } from '@/types/types'
import BadgeIntroduction from './BadgeIntroduction'

interface Props {
  workExperience?: experience[]
}
export function WorkExperience({ workExperience }: Props) {
  const handleOpenAiBtn = () => {
    window.my_modal_3.showModal()
  }
  return (
    <section
      aria-label="experiencia laboral"
      className="card shadow-lg mb-6  w-full "
    >
      <div className="card-body justify-center bg-base-200 p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Experiencia laboral</h2>
          <button
            className="btn btn-outline btn-primary btn-xs"
            onClick={handleOpenAiBtn}
          >
            Enhance with Ai
          </button>
        </div>
        <div className="divider  before:bg-zinc-400 after:bg-zinc-400 my-2 -mx-3"></div>
        {workExperience?.map((experienceItm) => {
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
                    <small className="text-accent-content">Descripción</small>
                    <p>{experienceItm.description}</p>
                    <div className="inline-flex gap-2 flex-wrap pt-4">
                      {experienceItm.expertise.map((skill) => {
                        return (
                          <div key={skill.skill} className="badge badge-accent">
                            <small className="text-xs ">{skill.skill}</small>
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
  )
}
