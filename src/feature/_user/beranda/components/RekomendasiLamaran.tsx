"use client"

import React, { useEffect } from "react"
import JobCard from "@/shared/components/JobCard"
import { Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Job } from "@/shared/types/job"
import { JobService } from "@/api/services/job"

const RekomendasiLamaran = () => {
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
    <div className="bg-white w-full p-4 border border-[#D9D9D9] rounded-3xl space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="title-bold">
            Rekomendasi Untukmu
          </h2>

          <Link href={"/cariLowongan"}>
            <button className="text-secondary text-base font-medium flex items-center gap-2 hover:text-bl-08 cursor-pointer">
              Lihat Semua →
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {job.slice(0, 6).map((job: Job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="">
          <Link href={"/cariLowongan"}>
            <button className="w-full border-2 border-dashed border-blue-400 rounded-xl py-4 flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-50 transition cursor-pointer">
              Lihat Lowongan Lainnya
              <Plus />
            </button>
          </Link>
        </div>
    </div>
  )
}

export default RekomendasiLamaran