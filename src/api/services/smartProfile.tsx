import { SmartProfileResponse } from "@/shared/types/smartProfile";
import api from "../core/axios";


export const smartProfileService = {
    getSmartProfile: async () => {
        const response = await api.get<SmartProfileResponse>('/smart-profile');
        return response.data;
    }
}