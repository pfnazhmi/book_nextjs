import React from 'react'
import Image from 'next/image'
import { LogoImg } from '../../../public'

const Navbar = () => {
  return (
    <section className='min-h-screen'>
      <div>
        <nav className='pt-10 pr-10 pl-10 pb-5 mb-12 flex justify-between'>
          <Image src={LogoImg} alt="logo" />

        </nav>
      </div>
    </section>
  )
}

export default Navbar