export interface SmartProfileResponse {
    data: {
        personal_info: {
            name: string;
            age: string;
            city: string;
            education: string;
            avatar_url: string;
        };
        career_preference: {
            job_field: string;
            job_type: string;
            status: string;
        };
        communication: {
            communication_preference: string;
        };
        accessibility: {
            work_environment: string[];
            special_needs: string[];
        };
        career_mapping: string | null;
        updated_at: string;
    };
    message: string;
    success: boolean;
}