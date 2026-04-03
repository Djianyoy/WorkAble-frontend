export type TabType = 'terkirim' | 'diproses' | 'interview' | 'ditolak'

export interface ApplicationStatus {
  sent: boolean
  hrReviewed: boolean
  interview: boolean
  offering: boolean
  selected: boolean
}

export interface Application {
  id: string
  position: string
  company: string
  workType: string
  employmentType: string
  status: ApplicationStatus
  interviewScheduled: boolean
  interviewDate?: string
  appliedDate: string
}

export interface Recommendation {
  id: string
  company: string
  type: string
}
