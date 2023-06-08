import { type personalData } from '@/types/types'
interface Props {
  personalData?: personalData
}
export function PersonalData({ personalData }: Props) {
  const birthday = new Date(personalData?.birthDay as Date).toLocaleDateString()
  return (
    <section aria-label="personal data" className="card shadow-lg mb-6 w-full">
      <div className="card-body bg-base-200 justify-center p-6 rounded-xl">
        <h2 className="card-title text-left font-bold ">
          {personalData?.name} {personalData?.surname1}
          {personalData?.surname2}
        </h2>
        <small className="text-neutral-500 leading-3 text-xs ">
          {birthday}
        </small>
        <small className="text-neutral-500 leading-3  text-xs">
          {personalData?.cityName}
        </small>
        <p className="text-sm">{personalData?.email}</p>
        <p className="text-sm">{personalData?.internationalPhone}</p>
      </div>
    </section>
  )
}
