import Hero from '@/feature/hero/components/Hero'
import Mengapa from '@/feature/mengapa/components/Mengapa'
import Footer from '@/shared/components/Footer'
import Navbar from '@/shared/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <main className='min-h-screen'>
      <Hero/>
      <section id='mengapa'>
        <Mengapa/>
      </section>
    </main>
  )
}

export default Page