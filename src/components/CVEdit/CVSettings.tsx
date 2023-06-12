import { INFOJOBS_MODAL_REQ } from '@/app/const'
import { useBoundStore } from '@/stores/useBoundStore'

interface Props {
  handleClickRefreshCVInfo: () => void
}

export function CVSettings({ handleClickRefreshCVInfo }: Props) {
  const CVList = useBoundStore((state) => state.CVList)
  const currentCVCode = useBoundStore((state) => state.currentCVCode)
  const setIsCloseModal = useBoundStore((state) => state.setIsCloseModal)
  const setCurrentCvCode = useBoundStore((state) => state.setCurrentCvCode)

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const cvCode = (e.target as HTMLInputElement).value
    handleClickRefreshCVInfo()
    setCurrentCvCode(cvCode)
  }
  const handleClose = () => {
    setIsCloseModal(INFOJOBS_MODAL_REQ.EDIT_CV)
  }
  return (
    <div className="card-body bg-base-200 justify-center p-3 lg:p-6 rounded-xl text-left shadow-md">
      <div className="card border border-blue-950 rounded-md w-full p-2">
        <small className="text-accent-content">Curriculum</small>
        <section className="form-control items-center">
          {CVList &&
            CVList.map((cvItem, i) => {
              return (
                <div key={cvItem.cv?.id} className="w-full">
                  <label
                    key={cvItem.cv?.id}
                    className="label cursor-pointer gap-8 w-fullcontent-center"
                  >
                    <span className="label-text  overflow-hidden text-ellipsis">
                      {cvItem.cv?.name}
                    </span>
                    <input
                      type="radio"
                      name="radio-3"
                      className="radio checked:bg-default"
                      onClick={handleClick}
                      value={cvItem.cv?.code || ''}
                      defaultChecked={cvItem.cv?.code === currentCVCode}
                    />
                  </label>
                </div>
              )
            })}
        </section>
      </div>
      <div className="w-full text-center">
        <button className="btn btn-outline " onClick={handleClose}>
          Guardar en Infojobs
        </button>
      </div>
    </div>
  )
}
