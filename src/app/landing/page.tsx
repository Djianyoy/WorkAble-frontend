import CaraKerjaContainer from '@/feature/home/caraKerja/container/CaraKerjaContainer'
import Hero from '@/feature/home/hero/components/Hero'
import MengapaContainer from '@/feature/home/mengapa/container/MengapaContainer'
import MitraContainer from '@/feature/home/mitra/container/MitraContainer'
import MarqueePerusahaan from '@/feature/home/perusahaan/container/MarqueePerusahaan'

const Page = () => {
  return (
    <main className='min-h-screen'>
      <Hero/>
      <section id='mengapa'>
        <MengapaContainer/>
      </section>

      <section id='caraKerja'>
        <CaraKerjaContainer/>
      </section>

      <section id='mitra'>
          <MarqueePerusahaan/>
      </section>

      <section id='mitra'>
          <MitraContainer/>
      </section>
    </main>
  )
}

export default Page