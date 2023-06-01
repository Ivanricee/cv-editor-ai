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
      <div className="bg-slate-800 rounded-md aspect-square w-[65px] h-[65px]">
        <Company />
      </div>
      <div>
        <h2 className="card-title text-left font-normal text-lg">{title}</h2>
        <p className="text-base text-slate-400 leading-4">{subtitle}</p>
        <small className=" text-slate-400">
          {getDate(startDate)}
          {' - '}
          {getDate(finishDate)}
        </small>
      </div>
    </div>
  )
}
