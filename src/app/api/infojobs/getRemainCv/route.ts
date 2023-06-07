import { getRemainingCV } from '@/services/infojobs_services'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const cvCode = searchParams.get('cvCode')
  const cookieAccessToken = request.cookies.get('access_token') || null

  if (cookieAccessToken?.value && cvCode) {
    try {
      const response = await getRemainingCV(cvCode, cookieAccessToken.value)
      return NextResponse.json(response)
    } catch (error) {
      return NextResponse.json({
        error: 'Error en la petición',
      })
    }
  }
}
//
