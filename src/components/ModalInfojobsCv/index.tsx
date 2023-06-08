'use client'

import { INFOJOBS_MODAL_REQ } from '@/app/const'
import { useGetCurriculum } from '@/hooks/useGetCurriculum'
import { infojobState } from '@/types/types'
import { useBoundStore } from '@/stores/useBoundStore'
import { SelectCv } from './SelectCv'
import { UpdateCv } from './UpdateCV'
//set a global state to call component with different content for edition or creation
interface Props {
  isFromInfojobs: infojobState
  code: string
}
export function ModalInfojobsCv({ code, isFromInfojobs }: Props) {
  useGetCurriculum({ isFromInfojobs, code })
  const isCloseModal = useBoundStore((state) => state.isCloseModal)
  const infojobState = useBoundStore((state) => state.infojobState)

  return (
    <>
      <input
        type="checkbox"
        checked={!isCloseModal.status}
        onChange={() => () => ''}
        id="cv-modal"
        className="modal-toggle"
      />

      <section className="modal flex flex-col items-center justify-center ">
        <div className="modal-box w-[400px] sm:w-7/12 md:w-6/12 lg:w-4/12  max-w-5xl bg-base-200">
          {infojobState.loading && (
            <>
              <div className="bg-primary border border-info-content rounded-md">
                <h1>image centered</h1>
              </div>
              <h1>Espera mientras obtenemos tu CV</h1>
            </>
          )}
          {infojobState.error && <h1>Error: {infojobState.error}</h1>}
          {!infojobState.loading &&
            isCloseModal.request === INFOJOBS_MODAL_REQ.GET_CV && <SelectCv />}
          {!infojobState.loading &&
            isCloseModal.request === INFOJOBS_MODAL_REQ.EDIT_CV && <UpdateCv />}
          {/*
          actualiza (crear nuevo):
          <updateCv> button
            functionEvent: get 1 cv and request the edition
            *cerrar hasta recibir respuesta de info jobs que se actualizo
          */}
        </div>
      </section>
    </>
  )
}
