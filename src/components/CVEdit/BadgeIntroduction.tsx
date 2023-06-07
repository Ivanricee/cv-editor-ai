import Company from '../Svg'

interface Props {
  title: string
  subtitle: string
  badge?: string
  startDate: Date
  finishDate: Date
}
export default function BadgeIntroduction({
  title,
  subtitle,
  badge,
  startDate,
  finishDate,
}: Props) {
  const getDate = (date: Date) => new Date(date).toDateString()
  return (
    <div className="flex gap-4">
      <div className="bg-base-300 rounded-md aspect-square w-[65px] h-[65px]">
        <Company />
      </div>
      <div>
        {badge && (
          <span className="badge badge-accent rounded-md">{badge}</span>
        )}
        <h2 className="card-title text-left font-semibold text-lg">{title}</h2>
        <p className="text-base text-zinc-500 leading-4">{subtitle}</p>
        <small className=" text-zinc-500">
          {getDate(startDate)}
          {' - '}
          {getDate(finishDate)}
        </small>
      </div>
    </div>
  )
}
