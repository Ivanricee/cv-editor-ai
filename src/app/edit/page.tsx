'use client'

import { InfojobsCv } from '@/components/InfojobsCv'
import { useBoundStore } from '@/stores/useBoundStore'
import { iNFOJOBS_CV_ACTION } from '../const'
import Link from 'next/link'
import CVEdit from '@/components/CVEdit'

interface Props {
  searchParams: { [key: string]: string | undefined }
}
export default function EditPage({ searchParams }: Props) {
  const infojobsCreateNew = useBoundStore((state) => state.infojobsCreateNew)
  const infojobState = useBoundStore((state) => state.infojobState)
  const currentCV = useBoundStore((state) => state.currentCV)

  const infoJobsCVAction = infojobsCreateNew
    ? iNFOJOBS_CV_ACTION.CREATE
    : iNFOJOBS_CV_ACTION.EDIT

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
      <div>
        {currentCV !== 0 && <CVEdit />}
        Mostrar formulario
        {/* open modal */}
        <InfojobsCv
          action={infoJobsCVAction}
          code={code || ''}
          isFromInfojobs={isFromInfojobs}
        />
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
