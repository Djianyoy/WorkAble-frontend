"use client"

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='mycontainer flex items-center justify-between shadow-2xl'>

        <div>
          workabale
        </div>
        
        <div>
            <ul className='flex items-center justify-between gap-28 text-lg '>
                <li>
                    <Link href={"/mengapa"} className={`hover:font-semibold`}>Beranda</Link>
                </li>
                <li>
                    <Link href={"/caraKerja"} className={`hover:font-semibold `}>Ajukan</Link>
                </li>
                <li>
                    <Link href={"/mitra"} className={`hover:font-semibold`}>Riwayat</Link>
                </li>
            </ul>
        </div>

        <div className='flex gap-2'>
          <button>Masuk</button>
          <button>Datfar Gratis</button>
        </div>

    </nav>
  )
}

export default Navbar