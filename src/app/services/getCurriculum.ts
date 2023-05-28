/* eslint-disable max-len */
const basicToken =
  'NjU5Y2I5Mjg5NjJjNDU1NjgyMDcxYjU0NGYwMGEwNWU6REZVZlZXMmtpTkliWmNoU1JCTEk0OGM5OHlkZVRISG5uSHNTNUFwQTVXeWpmeEZWYXI='
const grant_type = 'authorization_code'
const client_id = '659cb928962c455682071b544f00a05e'
const client_secret = 'DFUfVW2kiNIbZchSRBLI48c98ydeTHHnnHsS5ApA5WyjfxFVar'
const redirect_uri = 'https://cv-editor-ai.vercel.app/edit'

export async function getCurriculum({ code }: { code: string }) {
  //retornar refresh_token y data
  const { access_token, refresh_token, error, error_description } =
    await getToken({ code })
  if (access_token) {
    getData({ access_token })

    console.log({ access_token, refresh_token })
  } else {
    console.log('sins token ', { error, error_description })
    refreshToken()
  }
}
async function getData({ access_token }: { access_token: string }) {
  const data = await fetch('https://api.infojobs.net/api/2/curriculum', {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${basicToken}, Bearer ${access_token}`,
    },
  })
  console.log('-----------------------data----------')
  console.log('tokenn: ', `Basic ${basicToken}, Bearer ${access_token}`)
  console.log(await data.json())
  console.log('-----------------------data----------')
}
export async function getToken({ code }: { code: string }) {
  //www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CV&client_id=659cb928962c455682071b544f00a05e&redirect_uri=https://cv-editor-ai.vercel.app/edit&response_type=code

  const data = await fetch(
    `https://www.infojobs.net/oauth/authorize?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}`,
    {
      cache: 'no-store',
      method: 'POST',
    }
  )
  const { access_token, refresh_token, error } = await getToken({ code })
  return await data.json()
}
export async function refreshToken() {
  const data = await fetch(
    `https://www.infojobs.net/oauth/authorize?grant_type=refresh_token&client_id=${client_id}&client_secret=${client_secret}&refresh_token=17d3b987-7e0c-456f-b013-0bda2325a463&redirect_uri=${redirect_uri}`,
    {
      cache: 'no-store',
      method: 'POST',
    }
  )
  //console.log('refreshed ', await data.json())
  return data.json()
  /*
    grant_type=refresh_token
    client_id=YOUR_CLIENT_ID
    client_secret=YOUR_CLIENT_SECRET (URL Encoded if necessary)
    refresh_token=REFRESH_TOKEN_AQUIRED_IN_STEP_2
    redirect_uri=YOUR_REDIRECT_URI
   */
}
