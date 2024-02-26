import React from 'react'
import Image from 'next/image'
import Hero from '../Hero';
import { LogoImg } from '../../../public'
import { LuSearch } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs'


const Navbar = () => {
  return (
    <section className='min-h-screen'>
      <div>
        <nav className='pt-10 pr-10 pl-10 pb-5 mb-12 flex justify-between'>
          <Image src={LogoImg} alt="logo" />
          <div>
            <form action="">
              <input placeholder='Find the book you are looking for' className='search-area' />
              <button className='search-button'>
                <LuSearch/>
              </button>
            </form>
          </div>
          <ul className='flex items-center'>
            <li><FaRegHeart className='cursor-pointer text-2xl ml-12'/> </li>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl ml-12'/> </li>
            <li> <a href="#" className='ml-12 text-xl'>ID</a></li>
            <li><a href="#" className='button-bg-secondary text-white px-4 py-2 rounded-md ml-8'>Contact</a></li>
          </ul>
        </nav>
        <div>
          <ul className='flex justify-center items-center'>
            <li><a href="#" className='mr-8'>Home</a></li>
            <li><a href="#" className='mr-8'>Bestseller</a></li>
            <li><a href="#" className='mr-8'>Category</a></li>
            <li><a href="#" className='mr-8'>Blog</a></li>
          </ul>
        </div>
        <Hero/>
      </div>
    </section>
  )
}

export default Navbar