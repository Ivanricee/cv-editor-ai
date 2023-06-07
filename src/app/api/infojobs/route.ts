import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ infojobs: 'infojobs api' })
}
/*import { refreshToken, getCV, getToken } from '@/services/infojobs_services'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const server_refresh_token = searchParams.get('refresh_token')
  const get_cv = searchParams.get('get_cv')
  let responseToken: any = null
  const cookieAccessToken = request.cookies.get('access_token') || null
  const cookieRefreshToken = request.cookies.get('refresh_token') || null

  const refreshServerToken = async (refreshTokenValue: string) => {
    try {
      const { access_token, refresh_token, error, error_description } =
        await refreshToken(refreshTokenValue)
      if (error) {
        request.cookies.clear()
      }
      return {
        access_token,
        refresh_token,
        error,
        error_description,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }
  //getToken
  if (code) {
    try {
      const { access_token, refresh_token, error, error_description } =
        await getToken({ code })
      if (error && cookieAccessToken && cookieRefreshToken) {
        const refreshTokenData = await refreshServerToken(
          cookieRefreshToken.value
        )
        responseToken = { ...refreshTokenData }
      } else {
        responseToken = {
          access_token,
          refresh_token,
          error,
          error_description,
        }
      }
    } catch (error) {
      responseToken = {
        error,
      }
    }
  }

  //refreshToken
  if (server_refresh_token) {
    refreshServerToken(server_refresh_token)
  }

  //getCv
  if (get_cv) {
    if (cookieAccessToken?.value) {
      try {
        const cvListResponse = await getCV(cookieAccessToken.value)

        responseToken = [...cvListResponse]
      } catch (error) {
        responseToken = {
          error,
        }
      }
    }
  }

  const response = NextResponse.json(responseToken)
  if (responseToken.access_token && !get_cv) {
    response.cookies.set({
      name: 'access_token',
      value: responseToken.access_token,
      httpOnly: true,
    })
    response.cookies.set({
      name: 'refresh_token',
      value: responseToken.refresh_token,
      httpOnly: true,
    })
  }

  return response
}
*/
