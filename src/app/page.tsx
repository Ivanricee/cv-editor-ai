import Link from 'next/link'
import { getCurriculum } from './services/getCurriculum'
import { InfojobsCv } from './components/InfojobsCv'
import { iNFOJOBS_CV_ACTION } from './const'

export default async function Home() {
  // asdfsd = await getOffers()
  // console.log({ asdfsd })
  return (
    <div className="flex flex-col min-h-screen max-h-full w-screen bg-base-100">
      <main
        className={
          'flex flex-wrap justify-center  items-center gap-8 content-center h-screen'
        }
      >
        <section className="w-screen">
          <InfojobsCv action={iNFOJOBS_CV_ACTION.GET} />
        </section>
        <section>
          <div>
            <h1>CV Editor Ai</h1>
            <p>this app allows you to create and edit your cv</p>
            <p>
              you can sync your previous information from ifo jobs an save the
              changes you make
            </p>
          </div>
          <h2 className="mt-16 mb-8">Que accion deseas realizar</h2>
          <div className="flex bg-base-200 border gap-8 ">
            <button className="btn-active border border-b-secondary">
              Obtener Cv de Infojobs
            </button>
            <Link href="/create">Crear nuevo CV</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
