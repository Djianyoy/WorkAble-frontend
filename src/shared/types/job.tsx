export interface Job {
   id: string,
   company_id: string,
   company_name: string,
   company_logo: string,
   title: string,
   city: string,
   job_type: string,
   job_field: string,
   salary: string,
   accepted_disability: string[],
   accessibility_label: string[],
   created_at: string
}

export interface JobDetail {
   id: string,
   company_id: string,
   company_name: string,
   company_logo: string,
   title: string,
   city: string,
   job_type: string,
   job_field: string,
   salary: string,
   accepted_disability: string[],
   accessibility_label: string[],
   created_at: string
   description: string,
   qualification: string[],
}

export interface JobPagination {
  data: Job[]
  total: number
  page: number
  limit: number
}

export interface JobResponse {
  data: JobPagination
  message: string
  success: boolean
}

export interface JobDetailResponse {
  data: JobDetail
  message: string
  success: boolean
}
