import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false)

    useEffect(()=>{
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return ()=>{document.body.style.overflow = 'auto'}
    },[showMobileMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className=' container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent' id='Header'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-green-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-green-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-green-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-green-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>
            <img src={assets.menu_icon} className='md:hidden w-7 cursor-pointer ' onClick={()=>setShowMobileMenu(true)} alt="menu-icon" />
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' :'h-0 w-0 ' }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img src={assets.cross_icon} className='w-6' onClick={()=>setShowMobileMenu(false)} alt="cross-icon" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a href="#Header" className='cursor-pointer px-4 py-2 inline-block rounded-full' onClick={()=>setShowMobileMenu(false)}>Home</a>
                <a href="#About" className='cursor-pointer px-4 py-2 inline-block rounded-full' onClick={()=>setShowMobileMenu(false)}>About</a>
                <a href="#Projects" className='cursor-pointer px-4 py-2 inline-block rounded-full' onClick={()=>setShowMobileMenu(false)}>Projects</a>
                <a href="#Testimonials" className='cursor-pointer px-4 py-2 inline-block rounded-full' onClick={()=>setShowMobileMenu(false)}>Testimonials</a> 
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar