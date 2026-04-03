"use client"

import { smartProfileService } from "@/api/services/smartProfile"
import { useEffect, useState } from "react"

const PreferenceCard = () => {
  const [jobField, setJobField] = useState<string>('')
  const [jobType, setJobType] = useState<string>('')
  const [status, setStatus] = useState<string>('')


  useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await smartProfileService.getSmartProfile()
  
  
          setJobField(data.career_preference.job_field)
          setJobType(data.career_preference.job_type)
          setStatus(data.career_preference.status)
        } catch (error) {
          console.error(error)
        }
      }
  
      fetchData()
    }, [])



  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Preferensi Kerja</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-400 uppercase">Bidang Minat</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{jobField}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-400 uppercase">Tipe Kerja</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{jobType}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
            <p className="text-xs font-medium text-slate-400 uppercase">Status</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{status}</p>
          </div>
      </div>
    </div>
  )
}

export default PreferenceCard
