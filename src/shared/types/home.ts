export interface HomeResponse {
   data: {
        greeting: {
            name: string
            timestamp: string
            avatar_url: string
        }
        job_recommendation: null
        career_mapping: null
    }
    success: boolean
    message: string
}