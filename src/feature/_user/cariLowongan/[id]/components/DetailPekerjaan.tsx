"use client"

import { JobService } from "@/api/services/job";
import { Job, JobDetail } from "@/shared/types/job";
import { LocateIcon, LocationEdit, LocationEditIcon, MapPlus } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const DetailPekerjaan = () => {
    const { id } = useParams();
    const [job, setJob] = useState<JobDetail | null>(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await JobService.getJobById(id as string);
                setJob(response.data);
            } catch (error) {
                console.error(error);
            } 
        };
        fetchJob();
    }, [id]);
    return (
        <div className="space-y-4">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Image
                        src={job?.company_logo || "/LogoPerusahaan.webp"}
                        alt="Logo Company"
                        width={500}
                        height={500}
                        className="w-18 h-18"
                    />
                    <h4 className="title-semibold mt-2">
                        {job?.company_name}
                    </h4>
                </div>
                <h3 className="h2-semibold">
                    {job?.title}
                </h3>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/LocationIcon.webp"
                            alt="Location"
                            width={100}
                            height={100}
                            className="w-5 h-7"
                        />
                        <p className="body-regular">
                            {job?.city}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/PeopleIcon.webp"
                            alt="Money"
                            width={100}
                            height={100}
                            className="w-7 h-7"
                        />
                        <p className="body-regular">
                            {job?.salary}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/BrowserIcon.webp"
                            alt="Money"
                            width={100}
                            height={100}
                            className="w-7 h-7"
                        />
                        <p className="body-regular">
                            tokopedia.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Deskripsi Pekerjaan 
                    </h6>
                    <p className="body-regular">
                        {job?.description}
                    </p>
                </div>
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Informasi Pekerjaan 
                    </h6>
                    <p className="body-regular">
                        
                    </p>
                </div>
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Kualifikasi Pekerjaan
                    </h6>
                    <p className="body-regular">
                        {job?.qualification}
                    </p>
                </div>
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Jenis Disabilitas yang tersedia
                    </h6>
                    <div className="flex items-center gap-2">
                        {job?.accepted_disability.map((disability, index) => (
                            <div key={index} className="">
                                <p className="bg-[#FFD4B0] text-[#FF6B00] px-4 py-2 rounded-full border border-[#FF6B00]">
                                    {disability}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default DetailPekerjaan