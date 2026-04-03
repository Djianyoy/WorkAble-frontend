"use client"

import { JobService } from "@/api/services/job";
import JobCard from "@/shared/components/JobCard";
import { Job } from "@/shared/types/job";
import { useEffect, useState } from "react";


const HasilPencarian = () => {
     const [job, setJob] = useState<Job[]>([]);
    
      useEffect(() => {
        const fetchJob = async () => {
          try {
            const { data } = await JobService.getJob();
            setJob(data.data);
          } catch (error) {
            console.error("Error fetching job:", error);
          }
        }
        fetchJob();
      }, [])


    return (
        <div className="space-y-4">
            <h3 className="h3-semibold">Hasil Pencarian</h3>

            <div className="bg-white p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {job.map((job: Job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>

        
    );
};

export default HasilPencarian;