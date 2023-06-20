import { OPENAI_TOKEN } from '@/app/const'
import {
  WEXPERIENCE_SYSTEM_CONTENT,
  WEXPERIENCE_USER_CONTENT,
} from '@/chatGptPromps/workExperience'
import { NextResponse } from 'next/server'
import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessageRoleEnum,
} from 'openai'

const configuration = new Configuration({
  apiKey: OPENAI_TOKEN,
})

const openai = new OpenAIApi(configuration)

const INITIAL_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: WEXPERIENCE_SYSTEM_CONTENT,
  },
]

export async function GET(request: Request) {
  const chatCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0,
    messages: [
      ...INITIAL_MESSAGES,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: WEXPERIENCE_USER_CONTENT,
      },
    ],
  })
  const dataChatResponse = chatCompletion.data.choices[0].message?.content ?? ''
  let jsonChatResponse
  try {
    jsonChatResponse = JSON.parse(dataChatResponse)
    return NextResponse.json(jsonChatResponse)
  } catch {
    return new Response('No se ha podido trnsformar el JSON', { status: 500 })
  }
}
