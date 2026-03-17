import React from 'react'
import MengapaCard from './MengapaCard'

const Mengapa = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center gap-8'>
        <div className='space-y-2'>
            <h3 className='body-semibold text-secondary'>
                MENGAPA WORKABLE
            </h3>
            <h2 className='h2-semibold text-black'>
                Dirancang untuk 
            </h2>
            <p className='h2-semibold text-secondary'>kamu</p>
            <p className='w-128 caption-regular text-[#757575]'>
                Bukan sekadar job board. WorkAble adalah platform yang memahami kebutuhan unikmu sejak langkah pertama.
            </p>

        </div>
            <MengapaCard/>
        <div>

        </div>
    </section>
  )
}

export default Mengapa