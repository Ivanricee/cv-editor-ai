import { type experience } from '@/types/types'
import BadgeIntroduction from '../CVEdit/BadgeIntroduction'
import { useEffect, useRef } from 'react'

interface Props {
  workExperience?: experience
}
export function WorkDescription({ workExperience }: Props) {
  const refTextArea = useRef(null)
  console.log('workExperience ', workExperience)
  useEffect(() => {
    if (refTextArea) refTextArea.current.autoFocus
  }, [])
  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="font-medium text-lg mb-10">
        Crea una mejor descripcion con Ai
      </h3>
      <div>
        <div className="opacity-60">
          <BadgeIntroduction
            finishDate={workExperience?.finishingDate}
            startDate={workExperience?.startingDate}
            subtitle={workExperience?.company}
            title={workExperience?.job}
          />
        </div>
        <div className="divider  before:bg-zinc-300 after:bg-zinc-300 my-2 "></div>
        <section aria-label="experiencia laboral" className="card  mb-6 w-full">
          <div key={workExperience?.id}>
            <div className="indicator w-full">
              <div className="card border border-green-900 rounded-md w-full">
                <div className="card-body p-4">
                  <small className="text-accent-content">Descripción</small>
                  <textarea
                    ref={refTextArea}
                    autoFocus
                    className="textarea textarea-accent bg-base-150 foc"
                    placeholder="Description"
                    value={workExperience?.description}
                  ></textarea>
                  <div className="inline-flex gap-2 flex-wrap pt-4 opacity-70">
                    {workExperience?.expertise.map((skill) => {
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
        </section>
      </div>
      <div className="text-center">
        <button className="btn  btn-disabled">Guardar</button>
      </div>
    </div>
  )
}
