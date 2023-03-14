import React from 'react'
import p1 from './icon--doordash.svg'
import p2 from './icon--grubhub.svg'
import p3 from './icon--postmates.svg'
import p4 from './icon--ubereats.svg'
import a1 from './partner-img.png'

function Partner() {
  return (
    <div className='bg-teal-600 py-10 px-4'>
      <div className='flex m-10'>
        <img className='w-1/3 rounded-md drop-shadow-md' src={a1} alt="" />
        <div className='w-2/3 mx-20 my-auto'>
          <h1 className='text-4xl font-bold text-[#d1f6fd] mb-10'>More Platforms. <br /> More Deliveries.</h1>
          <p className='font-light text-white mb-10'>Now you can run your entire restaurant from one tablet. Seamlessly sync all your orders in one place, manage multiple brands, and get valuable insights and metrics on your business.</p>
          <button className='float-right mx-auto text-[12px] bg-[#008ea0] text-white px-4 py-2 rounded-full border-[1px] hover:border-[#008ea0] border-white ease-in-out transition-all duration-300 shadow-md'>Learn More</button>
        </div>
      </div>
      <div className='flex justify-center mt-20 mb-14'>
        <img className='mx-auto' src={p1} alt="" />
        <img className='mx-auto' src={p2} alt="" />
        <img className='mx-auto' src={p3} alt="" />
        <img className='mx-auto' src={p4} alt="" />
      </div>
    </div>
    // <div className='bg-teal-600'>About Us</div>
  )
}

export default Partner