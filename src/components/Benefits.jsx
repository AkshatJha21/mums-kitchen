import React from 'react'

function Benefits() {
  return (
    <div className='bg-[#82f0ff] py-20'>
        <div className='flex'>
            <h1 className='text-3xl font-bold text-teal-800 m-10'>Delivery  Focused<br/>Spaces.</h1>
            <div className='w-3/5 mx-auto my-10'>
                <p>We'll provide the tools you need to get the most out of the growing delivery market, so you can focus on what you do best.</p>
                <button className='float-right text-white bg-gradient-to-r from-teal-500  to-teal-600 hover:bg-gradient-to-br shadow-md shadow-[#008ea0] font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2'>Begin Setup</button>
            </div>
        </div>
        <div className='flex my-10'>
            <div className='w-1/5 mx-auto text-center'>
                <h1 className='text-2xl font-medium my-5'>Real Estate</h1>
                <p className='mx-5 font-light'>Our cloud kitchens are located in the heart of delivery demand and designed to help you run your delivery business with maximum efficiency and minimal cost.</p>
            </div>
            <div className='w-1/5 mx-auto text-center'>
                <h1 className='text-2xl font-medium my-5'>Logistics & Fulfillment</h1>
                <p className='mx-5 font-light'>Your orders are delivered faster and more accurately, thanks to our on-site fulfillment team that handles all of the logistics for you.</p>
            </div>
            <div className='w-1/5 mx-auto text-center'>
                <h1 className='text-2xl font-medium my-5'>Facility Management</h1>
                <p className='mx-5 font-light'>We'll take care of the cleaning, maintenance, and security - so you can focus on the food.</p>
            </div>
            <div className='w-1/5 mx-auto text-center'>
                <h1 className='text-2xl font-medium my-5'>Proprietary Technology</h1>
                <p className='mx-5 font-light'>Manage all your delivery orders from one tablet, and leverage insightful data to efficiently operate and expand your business.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits