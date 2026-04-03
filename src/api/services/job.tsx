import api from "../core/axios";
import { JobDetailResponse, JobResponse } from "@/shared/types/job";

export const JobService = {
    getJob: async () => {
        const response = await api.get<JobResponse>('/job-board');
        return response.data;
    },
    getJobById: async (id: string) => {
        const response = await api.get<JobDetailResponse>(`/job-board/${id}`);
        return response.data;
    }
}