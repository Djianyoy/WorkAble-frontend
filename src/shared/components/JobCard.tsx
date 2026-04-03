import React from "react"
import Link from "next/link"
import { Job } from "../types/job"
import { formatDate } from "../utils/formatDate"

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Link href={`/cariLowongan/${job.id}`}>
      <div className="bg-bl-01 hover:bg-bl-02 rounded-2xl p-4 flex flex-col gap-4 justify-between h-full cursor-pointer">
        
        <div>
          <p className="caption-semibold text-[#757575]">
            {job.company_name}
          </p>

          <h3 className="title-bold text-[#252525] mt-1">
            {job.title}
          </h3>
          <p className="caption-semibold text-[#757575] mt-1">
            {job.city}
          </p>

        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            <div className="caption-regular text-secondary border border-secondary rounded-full px-2 py-1">
              {job.job_type}
            </div>
            <div className="bg-[#FFD4B0] caption-regular text-[#E66800] border border-[#E66800] rounded-full px-2 py-1">
              {job.accessibility_label}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-blue-600 font-semibold">
            {job.salary}
          </p>

          <p className="text-gray-500 text-sm">
            {formatDate(job.created_at)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default JobCard