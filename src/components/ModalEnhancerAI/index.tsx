import { type experience, type CVList } from '@/types/types'
import { PersonalData } from '../CVEdit/PersonalData'
import { WorkExperience } from '../CVEdit/WorkExperience'
import { WorkDescription } from './WorkDescription'
import { CV_TYPE_AI } from '@/app/const'
import { SkeletonAI } from '../SkeletonCV'
import { useBoundStore } from '@/stores/useBoundStore'
interface Props {
  cvItemData: experience
  type: symbol
}

export function ModalEnhancerAI({ cvItemData, type }: Props) {
  const { W_EXPERIENCE } = CV_TYPE_AI
  console.log('cvItemData ', cvItemData)

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-6xl h-full min-h-[300px] bg-base-300 p-0 flex flex-col md:flex-row"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
            ✕
          </button>
          {
            //bg-base-200 md:w-1/2 md:absolute top-0 left-0 right-0 md:bottom-0 p-6 shadow-md flex flex-col justify-center
          }
          <section className="bg-base-200 md:w-1/2  shadow-md flex flex-col  justify-center p-6">
            {
              {
                [W_EXPERIENCE]: <WorkDescription workExperience={cvItemData} />,
              }[type]
            }
          </section>
          <section className="right-0 p-6 box-border h-full md:absolute md:left-1/2  flex flex-col justify-center">
            <div className="w-full ">
              <SkeletonAI />
            </div>
          </section>
        </form>
      </dialog>
    </>
  )
}
