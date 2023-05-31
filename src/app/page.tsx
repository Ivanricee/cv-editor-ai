import Link from 'next/link'

export default async function Home() {
  const prod = '/infojobs'

  return (
    <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[500px] sm:w-screen md:w-3/5 lg:w-3/6 p-10 ">
      <div className="card-body hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">CV Editor AI</h1>
          <div className="py-6">
            <p className="break-words text-left">
              Simplifica la creación y edición de tu currículum vitae con
              inteligencia artificial.
            </p>
            <p className="break-words text-left py-3">
              Sincroniza tus CV con Infojobs y guarda los cambios realizados.
            </p>
          </div>
          <div className="flex gap-8 justify-center">
            <Link
              className="btn btn-outline btn-primary"
              href={{ pathname: '/edit', query: prod }}
            >
              Editar CV de infojobs
            </Link>
            <Link className="btn btn-outline " href="/create">
              Crear CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
