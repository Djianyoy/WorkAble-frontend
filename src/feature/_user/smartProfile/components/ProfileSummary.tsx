"use client"

import { SmartProfileResponse } from "@/shared/types/smartProfile"
import { useEffect, useState } from "react"
import { smartProfileService } from "@/api/services/smartProfile"



const ProfileSummary = () => {
  const [name, setName] = useState<string>()
  const [city, setCity] = useState<string>()
  const [age, setAge] = useState<string>()
  const [education, setEducation] = useState<string>()
  const [status, setStatus] = useState<string>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await smartProfileService.getSmartProfile()


        setName(data.personal_info.name)
        setCity(data.personal_info.city)
        setAge(data.personal_info.age)
        setEducation(data.personal_info.education)
        setStatus(data.career_preference.status)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])



  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Data Diri</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Nama</p>
          <p className="text-sm font-semibold text-slate-800">{name}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Usia</p>
          <p className="text-sm font-semibold text-slate-800">{age}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Kota</p>
          <p className="text-sm font-semibold text-slate-800">{city}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Pendidikan Terakhir</p>
          <p className="text-sm font-semibold text-slate-800">{education}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Status</p>
          <p className="text-sm font-semibold text-slate-800">{status}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Portfolio</p>
          <p className="text-sm font-semibold text-slate-800"> </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary
