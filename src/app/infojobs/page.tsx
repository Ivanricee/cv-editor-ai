/* eslint-disable max-len */
import { redirect } from 'next/navigation'

export default function Infojobs() {
  redirect(
    'https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CV,CANDIDATE_READ_CURRICULUM_SKILLS,CANDIDATE_EDIT_CURRICULUM_FUTURE_JOB,CANDIDATE_READ_CURRICULUM_FUTURE_JOB,CANDIDATE_READ_CURRICULUM_PERSONAL_DATA,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_EDIT_CURRICULUM_EXPERIENCE,CANDIDATE_EDIT_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EDUCATION&client_id=659cb928962c455682071b544f00a05e&redirect_uri=https://cv-editor-ai.vercel.app/edit&response_type=code'
  )
}
