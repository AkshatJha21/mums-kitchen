import React from 'react'
import img from './title-pic.png'

function Header() {
  return (
    <div className='md:flex p-4 items-center align-center justify-center bg-[#81f0ff] drop-shadow-lg'>
        <div className='TITLE flex text-xl font-medium text-black]'>
          <p>Mum's Kitchen</p>
          <img className='h-6 my-auto mx-2' src={img} alt="" />
        </div>
        <div className='NAVBAR flex space-x-16 text-sm mx-auto'>
          <p className='cursor-pointer hover:text-teal-600 ease-in-out transition-all duration-200'>SERVICES</p>
          <p className='cursor-pointer hover:text-teal-600 ease-in-out transition-all duration-200'>LOCATIONS</p>
          <p className='cursor-pointer hover:text-teal-600 ease-in-out transition-all duration-200'>CONTACT US</p>
        </div>
        <button className='BUTTON text-[12px] bg-[#008ea0] text-white px-4 py-2 rounded-full border-2 border-[#008ea0] hover:border-white ease-in-out transition-all duration-300'>TAKE A TOUR</button>
    </div>
    
  )
}

export default Header