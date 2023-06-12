import { type CVList } from '@/types/types'
import { PersonalData } from '../CVEdit/PersonalData'
import { WorkExperience } from '../CVEdit/WorkExperience'
import { WorkDescription } from './WorkDescription'
interface Props {
  cvInfo: CVList
}
export function ModalEnhancerAI({ cvInfo }: Props) {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-6xl h-full min-h-[300px] bg-base-300"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <section className="bg-base-200 md:w-1/2 absolute top-0 left-0 right-0 md:bottom-0 p-6 shadow-md flex flex-col justify-center">
            <WorkDescription workExperience={cvInfo?.experience[0]} />
          </section>
          {/*
          <section className="p-6  absolute top-0 left-0 right-0 sm:bottom-0 ">
          </section>*/}
        </form>
      </dialog>
    </>
  )
}
