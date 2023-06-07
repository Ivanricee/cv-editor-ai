import { getCV } from '@/services/infojobs_services'
import { type cv } from '@/types/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const cookieAccessToken = request.cookies?.get('access_token') || null
  if (cookieAccessToken?.value) {
    try {
      const response: cv[] | cv = await getCV(cookieAccessToken.value)
      if (Array.isArray(response)) {
        const cvListResp = await response.map((cvItem) => {
          return { cv: { ...cvItem } }
        })
        return NextResponse.json(cvListResp)
      }
      return NextResponse.json(response)
    } catch (error) {
      return NextResponse.json({
        error: 'Error en la petición',
      })
    }
  }
  return NextResponse.json({
    error: 'No access_token',
  })
}
