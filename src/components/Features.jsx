import React from 'react'
import features from './Features.png'
import f1 from './f1-logo.avif'
import f2 from './f2-logo.avif'
import f3 from './f3-logo.avif'
import f4 from './f4-logo.avif'

function Features() {
  return (
    <>
    <div className='bg-[#2bbfce] py-14'>
    <div className='flex'>
        <div className='mx-10 w-1/2 my-10'>
            <h1 className='flex text-3xl mb-10 font-semibold'>Spread the&nbsp;<p className='text-white'>secret sauce</p>&nbsp;of your Restaurant.</h1>
            <div>
                <div className='my-6'>
                <div className='flex mb-2'>    
                    <img src={f1} alt=""/>
                    <p className='text-2xl mx-4'>Open a cloud kitchen in one month</p>
                </div>
                <p className='font-light text-white'>Get cooking in weeks, not months. We make it easy to get your own kitchen up and running, whether you're launching one from scratch, or expanding an established brand to a new market.</p>
                </div>

                <div className='my-6'>
                <div className='flex mb-2'>
                    <img src={f2} alt="" />
                    <p className='text-2xl mx-4'>Expand with low risk and low capital</p>
                </div>
                <p className='font-light text-white'>Moving into our kitchens is simple and cost-effective. You’ll avoid spending upfront to build out a brick and mortar restaurant. By eliminating front-of-house labor and overhead, you take home a bigger slice of the pie in profits.</p>
                </div>

                <div className='my-6'>
                <div className='flex mb-2'>
                    <img src={f3} alt="" />
                    <p className='text-2xl mx-4'>Get your cooking to a larger audience</p>
                </div>
                <p className='font-light text-white'>Get instant access to an entirely new pool of customers. We place our kitchens in delivery hotspots with large numbers of hungry eaters who frequently order food online.</p>
                </div>

                <div className='my-6'>
                <div className='flex mb-2'> 
                    <img src={f4} alt="" />
                    <p className='text-2xl mx-4'>Leverage technology to streamline your business</p>
                </div>
                <p className='font-light text-white'>Manage your entire restaurant business through a single tablet. Access all your orders in a single app, integrate all your delivery platforms, and get insights and tools to help run your business.</p>
                </div>
                <button className='BUTTON float-right text-white bg-gradient-to-r from-teal-500  to-teal-600 hover:bg-gradient-to-br shadow-md shadow-[#008ea0] font-medium rounded-full text-sm px-5 py-2.5 text-center mx-auto'>Learn More</button>
            </div>
        </div>
        <img src={features} alt="" className='w-[35rem] h-[35rem] float-right my-10 mx-auto'/>
    </div>
    </div>
    </>
  )
}

export default Features