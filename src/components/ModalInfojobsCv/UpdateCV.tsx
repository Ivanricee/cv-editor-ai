import { INFOJOBS_MODAL_REQ } from '@/app/const'
import { useBoundStore } from '@/stores/useBoundStore'

export function UpdateCv() {
  const CVList = useBoundStore((state) => state.CVList)
  const currentCVCode = useBoundStore((state) => state.currentCVCode)
  const setIsCloseModal = useBoundStore((state) => state.setIsCloseModal)
  const CVName = CVList.find((cvItem) => cvItem.cv?.code === currentCVCode)

  const handleCloseBtn = () => setIsCloseModal(INFOJOBS_MODAL_REQ.EDIT_CV)

  return (
    <>
      <h3 className="font-bold text-lg">Los cambios se guardaran en el CV:</h3>
      <p className="py-4 text-center">{CVName?.cv?.name}</p>
      <div className="modal-action justify-center">
        <button className="btn btn-outline btn-primary">Guardar cambios</button>
        <button className="btn btn-outline" onClick={handleCloseBtn}>
          Close!
        </button>
      </div>
    </>
  )
}
