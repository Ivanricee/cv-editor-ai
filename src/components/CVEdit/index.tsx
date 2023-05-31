import { useBoundStore } from '@/stores/useBoundStore'

export default function CVEdit() {
  const CVList = useBoundStore((state) => state.CVList)
  console.log('CVList ', CVList)
  return (
    <section className="flex flex-nowrap gap-5 w-screen">
      <section
        aria-label="Form"
        className="card bg-neutral text-neutral-content rounded-md w-9/12"
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title">Data cv</h2>
        </div>
      </section>

      <section aria-label="Form otions" className="w-3/12">
        <div
          aria-label="Cv List"
          className="card  bg-neutral text-neutral-content rounded-md"
        >
          <div className="card-body items-center text-center">
            <h4 className="card-title">Curriculum:</h4>
          </div>
        </div>
      </section>
    </section>
  )
}
