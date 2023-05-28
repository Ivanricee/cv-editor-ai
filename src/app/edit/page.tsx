import { useGetCurriculum } from '@/hooks/useGetCurriculum'
import { getCurriculum } from '../services/getCurriculum'

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function EditPage({ searchParams }: Props) {
  const asd = useGetCurriculum()

  const { code, state, scopes, auth_type } = searchParams
  //const resol = await getCurriculum({ code })
  //console.log({ code, state, scopes, auth_type })

  return <h1>This is the edit page</h1>
}
