import { useBoundStore } from '@/stores/useBoundStore'
import { ListCv } from './ListCv'
import { INFOJOBS_MODAL_REQ } from '@/app/const'
import { useEffect, useState } from 'react'

export function SelectCv() {
  const [currentLocalCVCode, setCurrentLocalCVCode] = useState('')
  const CVList = useBoundStore((state) => state.CVList)

  const setIsCloseModal = useBoundStore((state) => state.setIsCloseModal)
  const setCurrentCvCode = useBoundStore((state) => state.setCurrentCvCode)

  const handleCloseBtn = () => {
    setIsCloseModal(INFOJOBS_MODAL_REQ.GET_CV)
    setCurrentCvCode(currentLocalCVCode)
  }

  const handleCVSelected = ({ cvCode }: { cvCode: string }) => {
    setCurrentLocalCVCode(cvCode)
  }

  useEffect(() => {
    if (CVList.length > 0) setCurrentLocalCVCode(CVList[0].cv!.code)
  }, [CVList])

  return (
    <>
      <h3 className="font-bold text-lg">Selecciona el CV que deseas editar</h3>
      <ListCv handleCvOption={handleCVSelected} />
      <div className="modal-action justify-center">
        <button className="btn btn-outline" onClick={handleCloseBtn}>
          Editar
        </button>
      </div>
    </>
  )
}
