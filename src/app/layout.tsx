import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cv Editor Ai',
  description: 'Create & edit your CV with Artificial intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="hero min-h-screen bg-base-300 ">{children}</main>
      </body>
    </html>
  )
}
