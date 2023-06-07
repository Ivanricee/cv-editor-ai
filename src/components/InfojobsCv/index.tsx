'use client'
import { useEffect, useRef, useState } from 'react'
import { ListCv } from './ListCv'
import { iNFOJOBS_CV_ACTION } from '@/app/const'
import { useGetCurriculum } from '@/hooks/useGetCurriculum'
import { infojobState } from '@/types/types'
import { useBoundStore } from '@/stores/useBoundStore'
//set a global state to call component with different content for edition or creation
interface Props {
  action: string
  isFromInfojobs: infojobState
  code: string
}
export function InfojobsCv({ action, code, isFromInfojobs }: Props) {
  const [currentLocalCVCode, setCurrentLocalCVCode] = useState('')
  const [isCloseModal, setIsCloseModal] = useState(false)

  useGetCurriculum({ isFromInfojobs, code })

  const infojobState = useBoundStore((state) => state.infojobState)
  const CVList = useBoundStore((state) => state.CVList)
  const setCurrentCvCode = useBoundStore((state) => state.setCurrentCvCode)

  const handleCloseBtn = () => {
    setIsCloseModal((state) => !state)
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
      <div className="w-full text-center">
        <label
          htmlFor="cv-modal"
          className="btn btn-outline "
          onClick={handleCloseBtn}
        >
          Guardar en Infojobs
        </label>
      </div>
      <input
        type="checkbox"
        checked={!isCloseModal}
        onChange={() => () => ''}
        id="cv-modal"
        className="modal-toggle"
      />

      <section className="modal flex flex-col items-center justify-center ">
        <div className="modal-box w-[400px] sm:w-7/12 md:w-6/12 lg:w-4/12  max-w-5xl bg-base-200">
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
                  className="btn btn-outline"
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
