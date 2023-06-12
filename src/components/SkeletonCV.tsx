import { SkelImage } from './Svg'

export function SkeletonCV() {
  return (
    <>
      <div className="w-full px-6">
        <div className="flex items-center w-full p-6 ">
          <div role="status" className="space-y-2.5 animate-pulse max-w-lg ">
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 rounded-full bg-zinc-400 w-40"></div>
            </div>
            <div className="flex items-center w-full space-x-2">
              <div className="h-2 rounded-full bg-zinc-400 w-16"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap-reverse w-[450px] md:flex-nowrap gap-4 py-4 px-6 md:min-w-[750px]
      lg:w-[900px] justify-center content-center"
      >
        <section className="w-full md:w-9/12">
          <section className="bg-base-250 rounded-lg card mb-6 animate-pulse w-full ">
            <div className="flex items-center w-full p-6 ">
              <div
                role="status"
                className="space-y-2.5 animate-pulse max-w-lg "
              >
                <div className="flex items-center w-full space-x-2">
                  <div className="h-2.5 rounded-full bg-zinc-400 w-40"></div>
                </div>
                <div className="flex items-center w-full space-x-2">
                  <div className="h-2 rounded-full bg-zinc-400 w-16"></div>
                </div>
                <div className="flex items-center w-full space-x-2">
                  <div className="h-2 rounded-full bg-zinc-400 w-20"></div>
                </div>
                <div className="flex items-center w-full space-x-2">
                  <div className="h-2 rounded-full bg-zinc-400 w-32"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                  <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                  <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                  <div className="h-2 rounded-full bg-zinc-400 w-24"></div>
                </div>
              </div>
            </div>
          </section>
          {Array(4)
            .fill(null)
            .map((item, i) => {
              return (
                <section
                  key={i}
                  className="bg-base-250 w-full rounded-lg card mb-6 animate-pulse flex flex-row flex-wrap p-6"
                >
                  <div className="w-full space-x-2">
                    <div className="h-2 rounded-full bg-zinc-400 w-40"></div>
                  </div>
                  <div className="divider  before:bg-zinc-400 after:bg-zinc-400 my-2 -mx-3"></div>
                  <div className="w-1/6 items-center justify-center h-full bg-gray-400 rounded p-4 aspect-square">
                    <SkelImage />
                  </div>
                  <div className="flex items-center pl-4 w-5/6">
                    <div
                      role="status"
                      className="space-y-2.5 animate-pulse max-w-lg w-full"
                    >
                      <div className="flex items-center w-full space-x-2">
                        <div className="h-2.5 rounded-full bg-zinc-400 w-40"></div>
                      </div>
                      <div className="flex items-center w-full space-x-2">
                        <div className="h-2 rounded-full bg-zinc-400 w-16"></div>
                      </div>
                      <div className="flex items-center w-full space-x-2">
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                      </div>
                      <div className="flex items-center w-full space-x-2">
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                      </div>
                      <div className="flex items-center w-full space-x-2">
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                      </div>
                      <div className="flex items-center w-full space-x-2">
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                      </div>
                      <div className="flex items-center w-full space-x-2 max-w-[480px]">
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-24"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-full"></div>
                        <div className="h-2 rounded-full bg-zinc-400 w-24"></div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })}
        </section>
        <section
          aria-label="Form otions"
          className="w-1/2 md:w-3/12 animate-pulse"
        >
          <div className="card-body bg-base-250 justify-center p-3 lg:p-6 rounded-xl text-left shadow-md">
            <div className="card border border-zinc-400 rounded-md w-full p-2">
              <div className="flex items-center w-full flex-wrap">
                <div className="flex items-center w-full space-x-2 pb-4">
                  <div className="h-2.5 rounded-full bg-zinc-400 w-40"></div>
                  <div className="h-6 rounded-full bg-zinc-400 w-6 aspect-square"></div>
                </div>
                <div className="flex items-center w-full space-x-2">
                  <div className="h-2.5 rounded-full bg-zinc-400 w-40"></div>
                  <div className="h-6 rounded-full bg-zinc-400 w-6 aspect-square"></div>
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              <div className="card border border-zinc-400 rounded-md w-full p-2">
                <div className="flex items-center w-full space-x-2">
                  <div className="h-4 rounded-full bg-zinc-400 w-40"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
