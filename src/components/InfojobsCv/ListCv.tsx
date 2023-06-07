import { useBoundStore } from '@/stores/useBoundStore'
import { useEffect, useRef, useState } from 'react'

interface Props {
  handleCvOption: ({ cvCode }: { cvCode: string }) => void
}

export function ListCv({ handleCvOption }: Props) {
  const CVList = useBoundStore((state) => state.CVList)
  const listOfRadio = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    if (CVList.length > 0) listOfRadio.current[0].checked = true
  }, [CVList])

  const handleClickSelected = (e: React.MouseEvent<HTMLInputElement>) => {
    const cvCode = (e.target as HTMLInputElement).value
    handleCvOption({ cvCode })
  }
  return (
    <section>
      <h2 className="py-2">Puedes editar hasta 5 CV</h2>
      <section className="form-control items-center">
        {CVList.length !== 0 &&
          CVList.map((cvItem, i) => {
            return (
              <label
                key={cvItem.cv?.id}
                className="label cursor-pointer gap-8 w-1/2 md:w-5/12 content-center"
              >
                <span className="label-text uppercase">{cvItem.cv?.name}</span>
                <input
                  ref={(e) => (listOfRadio.current[i] = e as HTMLInputElement)}
                  type="radio"
                  name="radio-2"
                  className="radio "
                  onClick={handleClickSelected}
                  value={cvItem.cv?.code || ''}
                />
              </label>
            )
          })}
      </section>
    </section>
  )
}
