import {
  BASIC_TOKEN,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  INFOJOBS_AUTHORIZE,
  REDIRECT_URL,
} from '@/app/const'
import { type cv } from '@/types/types'

/* eslint-disable max-len */
const basicToken = BASIC_TOKEN
const grantType = GRANT_TYPE
const clientId = CLIENT_ID
const clientSecret = CLIENT_SECRET
const redirectUri = REDIRECT_URL
const infojobsAuthorize = INFOJOBS_AUTHORIZE

export async function getToken({ code }: { code: string }) {
  try {
    const data = await fetch(
      `${infojobsAuthorize}?grant_type=${grantType}&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`,
      {
        cache: 'no-store',
        method: 'POST',
      }
    )
    return await data.json()
  } catch (error) {
    return { error }
  }
}

export async function getCV(access_token: string) {
  const dataCV = await fetch('https://api.infojobs.net/api/2/curriculum', {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${basicToken}, Bearer ${access_token}`,
    },
  })
  const responseCv = await dataCV.json()
  return responseCv
}

export async function getRemainingCV(cvCode: string, access_token: string) {
  const fetchOptions = {
    cache: 'no-store' as RequestCache,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${basicToken}, Bearer ${access_token}`,
    },
  }

  const infojobsApi = 'https://api.infojobs.net/api'
  const fetchUri1 = `${infojobsApi}/1/curriculum/`
  const fetchUri2 = `${infojobsApi}/2/curriculum/`
  const fetchUri4 = `${infojobsApi}/4/curriculum/`
  return await Promise.all([
    fetch(`${fetchUri2}${cvCode}/personaldata`, fetchOptions),
    fetch(`${fetchUri2}${cvCode}/experience`, fetchOptions),
    fetch(`${fetchUri1}${cvCode}/education`, fetchOptions),
    fetch(`${fetchUri2}${cvCode}/skill`, fetchOptions),
    fetch(`${fetchUri4}${cvCode}/futurejob`, fetchOptions),
    ,
  ])
    .then(async ([personaldata, experience, education, skill, futurejob]) => {
      const experienceJson = await experience.json()
      const educationJson = await education.json()

      const response = {
        personalData: { ...(await personaldata.json()) },
        experience: [...experienceJson.experience],
        education: [...educationJson.education],
        skills: { ...(await skill.json()) },
        futureJob: { ...(await futurejob.json()) },
      }

      return response
    })
    .catch((error) => {
      console.error(`Error: ${error}`)
    })
}

export async function refreshToken(refreshToken: string) {
  const data = await fetch(
    `${infojobsAuthorize}?grant_type=refresh_token&client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&redirect_uri=${redirectUri}`,
    {
      cache: 'no-store',
      method: 'POST',
    }
  )
  const response = await data.json()
  return response
}

/*
  //https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CV,CANDIDATE_READ_CURRICULUM_SKILLS,CANDIDATE_EDIT_CURRICULUM_FUTURE_JOB,CANDIDATE_READ_CURRICULUM_FUTURE_JOB,CANDIDATE_READ_CURRICULUM_PERSONAL_DATA,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_EDIT_CURRICULUM_EXPERIENCE,CANDIDATE_EDIT_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EDUCATION&client_id=659cb928962c455682071b544f00a05e&redirect_uri=https://cv-editor-ai.vercel.app/edit&response_type=code
 */
