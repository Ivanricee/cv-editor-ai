import { futureJob } from '@/types/types'

interface Props {
  statusAndPreferences?: futureJob
}
export function StatusAndPreferences({ statusAndPreferences }: Props) {
  return (
    <section
      aria-label="Situación laboral y preferencias"
      className="card shadow-lg mb-6  w-full"
    >
      <div className="card-body bg-base-200 justify-center p-6 rounded-xl">
        <h2 className="font-medium">Situación laboral y preferencias</h2>
        <div className="divider  before:bg-zinc-400 after:bg-zinc-400 my-2 -mx-3"></div>
        <div className="flex flex-col gap-3 flex-wrap">
          {statusAndPreferences?.employmentStatus && (
            <span>
              <small className="text-zinc-500">Situación laboral</small>
              <p>{statusAndPreferences.employmentStatus}</p>
            </span>
          )}
          {statusAndPreferences?.preferredPosition && (
            <span>
              <small className="text-zinc-500">Puesto preferido</small>
              <p>{statusAndPreferences.preferredPosition}</p>
            </span>
          )}
          {statusAndPreferences?.motivationToChange && (
            <span>
              <small className="text-zinc-500">
                Motivos para cambiar de empleo
              </small>
              <p>{statusAndPreferences.motivationToChange}</p>
            </span>
          )}
          {statusAndPreferences?.futureJobGoals && (
            <span>
              <small className="text-zinc-500">Objetivos laborales</small>
              <p>{statusAndPreferences.futureJobGoals}</p>
            </span>
          )}
          {statusAndPreferences?.salaryMin && (
            <span>
              <small className="text-zinc-500">Expectativas salariales</small>
              <p>
                Minimo aceptado {statusAndPreferences.salaryMin} euros{' '}
                {statusAndPreferences.salaryPeriod}, deseado{' '}
                {statusAndPreferences.preferredSalary}{' '}
                {statusAndPreferences.salaryPeriod}
              </p>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
