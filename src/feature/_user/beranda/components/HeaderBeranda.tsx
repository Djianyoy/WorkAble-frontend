'use client'

import React, { useEffect, useState } from 'react'
import { formatDate } from '@/shared/utils/formatDate'
import { homeService } from '@/api/services/home'
import { useToast } from '@/shared/context/ToastContext'

const HeaderBeranda = () => {
    const [home, setHome] = useState({
        greeting: {
            name: '',
            timestamp: '',
            avatar_url: '',
        },
        job_recommendation: null,
        career_mapping: null,
    })
    const [isLoading, setIsLoading] = useState(true)
    const { showToast } = useToast()

    useEffect(() => {
        const fetchHome = async () => {
            try {
                const response = await homeService.getHome()
                setHome(response.data.data)
            } catch (error) {
                showToast({
                    type: 'error',
                    title: 'Gagal memuat data',
                    message: 'Terjadi kesalahan saat memuat data',
                })
            } finally {
                setIsLoading(false)
            }
        }
        fetchHome()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

  return (
    <div className='flex flex-col gap-8'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
                <div className='flex'>
                    <h3 className='h3-bold text-2xl md:text-[32px]'>
                        Selamat Datang, 
                    </h3>
                    <p className='h3-bold text-2xl md:text-[32px]'>
                        {home?.greeting?.name || 'User'}
                    </p>
                </div>
                <p className='caption-regular mt-1 md:mt-0'>
                    Ada 24 lowongan baru yang cocok untuk profilmu hari ini.
                </p>
            </div>
            <div className='bg-white px-4 py-2 flex items-center justify-center border-2 border-[#D9D9D9] rounded-full w-full md:w-auto mt-4 md:mt-0'>
                <p className='caption-regular'>
                    {formatDate(home?.greeting?.timestamp)}
                </p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
            <div className='w-full md:w-67 h-11 bg-white rounded-xl border border-[#D9D9D9] flex items-center justify-center text-center'>
                <p className='text-base font-semibold'>
                    {/* Total Job */}
                    8 Total Lamaran
                </p>
            </div>
            <div className='w-full md:w-67 h-11 bg-white  rounded-xl border border-[#D9D9D9] flex items-center justify-center text-center'>
                <p className='text-base font-semibold'>
                    {/* Total Dipanggil */}
                    1 Dipanggil Interview 
                </p>
            </div>
            <div className='w-full md:w-67 h-11 bg-white  rounded-xl border border-[#D9D9D9] flex items-center justify-center text-center'>
                <p className='text-base font-semibold'>
                    {/* Total Disimpan */}
                    12 Lowongan Disimpan
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeaderBeranda