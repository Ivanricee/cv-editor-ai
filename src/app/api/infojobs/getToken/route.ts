import { refreshToken, getToken } from '@/services/infojobs_services'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  request.headers.get('cookie')
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const cookieRToken = request.cookies.get('refresh_token') || null

  const getNewToken = async (type: string) => {
    if (type === 'code' && code) return await getToken({ code })

    return await refreshToken(cookieRToken?.value!)
  }

  if (code) {
    try {
      let responseToken = await getNewToken('code')

      if (responseToken.error && cookieRToken) {
        responseToken = await getNewToken('refresh')
      }
      const { access_token, refresh_token, error, error_description } =
        await responseToken

      const response = NextResponse.json({
        success: access_token ? true : false,
        error,
        error_description,
      })

      if (!error) {
        response.cookies.set({
          name: 'access_token',
          value: access_token,
          httpOnly: true,
        })
        response.cookies.set({
          name: 'refresh_token',
          value: refresh_token,
          httpOnly: true,
        })
      }

      return response
    } catch (error) {
      console.log('error: ', error)
      return NextResponse.json({ error: 'error on request' }, { status: 500 })
    }
  }
  //Error
  const response = NextResponse.json(
    { error: 'No code provided' },
    { status: 500 }
  )
  return response
}
