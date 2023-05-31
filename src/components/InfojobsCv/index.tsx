'use client'
import { useEffect, useRef, useState } from 'react'
import { ListCv } from './ListCv'
import { iNFOJOBS_CV_ACTION } from '@/app/const'
import { useGetCurriculum } from '@/hooks/useGetCurriculum'
import { infojobState } from '@/types/types'
import { useBoundStore } from '@/stores/useBoundStore'

interface Props {
  action: string
  isFromInfojobs: infojobState
  code: string
}
export function InfojobsCv({ action, code, isFromInfojobs }: Props) {
  const [currentLocalCVId, setCurrentLocalCVId] = useState(0)
  const [isCloseModal, setIsCloseModal] = useState(false)

  useGetCurriculum({ isFromInfojobs, code })

  const infojobState = useBoundStore((state) => state.infojobState)
  const CVList = useBoundStore((state) => state.CVList)
  const setCurrentCV = useBoundStore((state) => state.setCurrentCV)

  const handleCloseBtn = () => {
    setIsCloseModal((state) => !state)
    setCurrentCV(currentLocalCVId)
  }
  const handleCVSelected = ({ idCv }: { idCv: number }) => {
    setCurrentLocalCVId(idCv)
  }

  useEffect(() => {
    if (CVList.length > 0) setCurrentLocalCVId(CVList[0].cv.id)
  }, [CVList])

  return (
    <>
      <label htmlFor="my-modal-5" className="btn" onClick={handleCloseBtn}>
        open modal
      </label>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={!isCloseModal}
        onChange={() => () => ''}
        id="my-modal-5"
        className="modal-toggle"
      />

      <section className="modal flex flex-col items-center justify-center">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Selecciona el CV que deseas editar
          </h3>

          {infojobState.loading && (
            <>
              <div className="bg-primary border border-info-content rounded-md">
                <h1>image centered</h1>
              </div>
              <h1>Espera mientras obtenemos tu CV</h1>
            </>
          )}
          {infojobState.error && <h1>Error: {infojobState.error}</h1>}
          {!infojobState.loading && (
            <>
              <ListCv handleCvOption={handleCVSelected} />
              <div className="modal-action justify-center">
                <label
                  htmlFor="my-modal-5"
                  className="btn"
                  onClick={handleCloseBtn}
                >
                  Editar
                </label>
              </div>
            </>
          )}
          {/*
          obtiene to edit:
          <getCv>  button
             functionEvent: get cv by id or array of cvs
            * actuializar currentCvId para auto completar UI formulario con primer cv
            * si no hay CV redireccionar a create
          */
          /*
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
