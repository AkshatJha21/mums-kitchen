import React from 'react'
import banner from './banner-img.png'

function Banner() {
  return (
    <div className='flex bg-[#008ea0] py-6'>
        <img className='w-1/2' src={banner} alt="" />
        <div className='my-32 bg-gradient-to-tr from-[#008ea0] via-[#81f0ff] to-white py-16 px-8 rounded-l-lg space-y-8 shadow-md shadow-cyan-800'>
            <h1 className='text-5xl font-bold text-teal-700'>Cloud<br/>Serving.</h1>
            <p className='text-black'>We're taking home-cooked meals to a whole new place. Where quick delivery is prioritized, costs are minimized, and profits are maximized. And all you have to do is cook.</p>
            <button className='BUTTON float-right text-white bg-gradient-to-r from-teal-500  to-teal-600 hover:bg-gradient-to-br shadow-md shadow-[#008ea0] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 '>Learn More</button>
        </div>
    </div>
  )
}

export default Banner