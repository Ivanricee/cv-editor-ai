import { useBoundStore } from '@/stores/useBoundStore'
import { useEffect, useRef, useState } from 'react'

interface Props {
  handleCvOption: ({ idCv }: { idCv: number }) => void
}

export function ListCv({ handleCvOption }: Props) {
  const CVList = useBoundStore((state) => state.CVList)
  const listOfRadio = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    if (CVList.length > 0) listOfRadio.current[0].checked = true
  }, [CVList])

  const handleClickSelected = (e: React.MouseEvent<HTMLInputElement>) => {
    //traer data de los cvs seleccionados.
    //Guardar todos los cvs in zustand
    //filter list of cvs with those ids.
    //trigger function with the array of cv´s
    const idCv = Number((e.target as HTMLInputElement).value)

    handleCvOption({ idCv })
  }
  return (
    <section>
      <h2 className="py-2">Puedes editar hasta 5 CV</h2>
      <section className="form-control items-center">
        {CVList.length !== 0 &&
          CVList.map((cvItem, i) => {
            return (
              <label
                key={cvItem.cv.id}
                className="label cursor-pointer gap-8 w-1/2 md:w-1/3  content-center"
              >
                <span className="label-text text-accent uppercase">
                  {cvItem.cv.name}
                </span>
                <input
                  ref={(e) => (listOfRadio.current[i] = e as HTMLInputElement)}
                  type="radio"
                  name="radio-2"
                  className="radio checked:bg-blue-500"
                  onClick={handleClickSelected}
                  value={cvItem.cv.id || ''}
                />
              </label>
            )
          })}
      </section>
    </section>
  )
}
