'use client'
import { useRef } from 'react'
import { ListCv } from './ListCv'
import { iNFOJOBS_CV_ACTION } from '@/app/const'

interface Props {
  action: string
}
export function InfojobsCv({ action }: Props) {
  const isListMultiselection = useRef(action === iNFOJOBS_CV_ACTION.GET)
  //console.log({ isListMultiselection })
  return (
    <section className="flex flex-col items-center justify-center">
      {
        //loader depende del estado de zustand statusInfoJob
      }
      <div className="bg-primary border border-info-content rounded-md">
        <h1>image centered</h1>
      </div>
      <h1>Espera mientras obtenemos tu CV</h1>
      {
        //loader depende del estado de zustand statusInfoJob
      }
      <hr />
      <p> Este componente es un modal para:</p>
      <ul>
        <li>
          obtener token guardarlo (cookie) y actualizar statusInfoJob en store
        </li>
        <li>component to Get or edit a CV from a specific user (action)</li>
      </ul>
      <ListCv
        isMultiSelect={isListMultiselection.current}
        handleCvOption={() => {}}
      />
      <div>{/**SEction to get or edit a CV */}</div>
      {/*
        obtiene to edit:
        <getCv>
           functionEvent: get cv by id or array of cvs
          * actuializar currentCvId para auto completar UI formulario con primer cv
          * si no hay CV redireccionar a create
        */
      /*
        actualiza (crear nuevo):
        <updateCv>
          functionEvent: get 1 cv and request the edition
          *cerrar hasta recibir respuesta de info jobs que se actualizo
        */}
    </section>
  )
}
