'use client'

import { ModalInfojobsCv } from '@/components/ModalInfojobsCv'
import { useBoundStore } from '@/stores/useBoundStore'
import Link from 'next/link'
import CVEdit from '@/components/CVEdit'

interface Props {
  searchParams: { [key: string]: string | undefined }
}
export default function EditPage({ searchParams }: Props) {
  const infojobState = useBoundStore((state) => state.infojobState)
  const currentCVCode = useBoundStore((state) => state.currentCVCode)

  const { code, scopes, auth_type } = searchParams
  const isFromInfojobs = {
    loading: code && scopes && auth_type ? true : false,
    error: null,
  }
  if (infojobState.error)
    return (
      <section className="text-center">
        <h1 className="py-6">Error: {infojobState.error}</h1>

        <Link className="btn btn-outline btn-primary" href="/">
          Home
        </Link>
      </section>
    )
  return (
    <div>
      <div className="flex flex-col items-center">
        {currentCVCode && <CVEdit />}
        <ModalInfojobsCv code={code || ''} isFromInfojobs={isFromInfojobs} />
        {infojobState.loading && (
          <div>
            <h1>
              <p>Loading infojobs cv</p>
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}
