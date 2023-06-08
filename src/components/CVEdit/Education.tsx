import { type education } from '@/types/types'
import BadgeIntroduction from './BadgeIntroduction'

interface Props {
  education?: education[]
}
export function Education({ education }: Props) {
  return (
    <section aria-label="Estudios" className="card shadow-lg mb-6  w-full">
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
  )
}
