import Head from 'next/head'

interface Props {
  children: React.ReactNode
  title: string
}

export function Layout({ children, title }: Props) {
  return (
    <div className="flex flex-col min-h-screen max-h-full w-screen min-w-[361px] bg-gradient-body bg-no-repeat">
      <Head>
        <title>AI CV EDITOR - {title}</title>
        <meta name="description" content="3D lamp generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={
          'flex flex-wrap justify-center  items-center gap-8 content-center h-screen'
        }
      >
        {children}
      </main>
    </div>
  )
}
