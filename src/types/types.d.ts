export type token = {
  access_token: string | null
  refresh_token: string | null
}
export type infojobState = {
  loading: boolean
  error: string | null
}
export interface cv {
  id: number
  code: string
  name: string
  principal: boolean
  completed: boolean
  incompleteSteps: any[]
  error?: string
}
export interface education {
  courseCode: string
  educationLevelCode: string
  finishingDate: Date
  hideEducation: boolean
  id: number
  institutionName: string
  startingDate: Date
  stillEnrolled: boolean
}
export interface experience {
  category: string
  company: string
  description: string
  finishingDate: Date
  hideSalary: boolean
  id: string
  industry: string
  job: string
  level: string
  onCourse: boolean
  salaryMax: string
  salaryMin: string
  staff: string
  startingDate: Date
  subcategories: any[]
  visible: boolean
  expertise: { skill: string }[]
}
export interface futureJob {
  availabilityToChangeHomeAddress: string
  availabilityToTravel: string
  employmentStatus: string
  futureJobGoals: string
  monthlyNewsletter: boolean
  motivationToChange: string
  newsAnnouncements: boolean
  preferredDestinations: string[]
  preferredPosition: string
  subcategories: string[]
  workDay: string
}
export interface personalData {
  birthDay: Date
  cityName: string
  country: string
  email: string
  freelance: boolean
  gender: number
  internationalPhone: string
  name: string
  nationalIdentityCard: string
  nationalIdentityCardType: number
  preferredContactPhone: string
  province: string
  surname1: string
  surname2: string
  vehicleOwner: boolean
}
export interface skill {
  expertise: any[]
  language: Language[]
}

export interface Language {
  comments: string
  id: number
  reading: string
  speaking: string
  writing: string
}
export interface CVList {
  cv: cv
  education: education[]
  experience: experience[]
  futureJob: futureJob
  personalData: personalData
  skill: skill
}
interface cvSlice {
  CVList: CVList[]
  currentCV: number | null
  setCVList: (CVList: CVList[]) => void
  setCurrentCV: (currentCV: number) => void
}
export interface infojobsSlice {
  infojobState: infojobState
  infojobsCreateNew: boolean | null
  token: token
  setInfojobState: (infojobState: infojobState) => void
  setInfojobsCreateNew: (infojobsCreateNew: boolean) => void
  setToken: (token: token) => void
}
