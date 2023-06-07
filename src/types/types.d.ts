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
  contractTypes: string[]
  employmentStatus: string
  futureJobGoals: string
  lastJobSearch: string
  lastJobSearchDetails: string
  motivationToChange: string
  preferredDestinations: string[]
  preferredPosition: string
  preferredSalary: string
  salaryMin: string
  salaryPeriod: string
  subcategories: string[]
  workDay: string
  working: boolean
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
  cv?: cv
  education?: education[]
  experience?: experience[]
  futureJob?: futureJob
  personalData?: personalData
  skill?: skill
}
interface cvSlice {
  CVList: CVList[]
  currentCVCode: string | null
  setRemainingCvData: (code: string, remainCvData: CVList) => void
  setCVList: (CVList: CVList[]) => void
  setCurrentCvCode: (currentCvCode: string) => void
}
export interface infojobsSlice {
  infojobState: infojobState
  infojobsCreateNew: boolean | null
  token: boolean
  setInfojobState: (infojobState: infojobState) => void
  setInfojobsCreateNew: (infojobsCreateNew: boolean) => void
  setToken: (token: boolean) => void
}
