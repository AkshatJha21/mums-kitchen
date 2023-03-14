import React from 'react'

function Testimonial() {
  return (
    <div className='bg-teal-100 py-10 px-4'>
        <h1 className='text-3xl text-teal-700 font-bold mt-6 mb-10'>Testimonials.</h1>
        <div className='flex justify-center space-x-14'>
            <div className='bg-gradient-to-b from-white to-[#81f0ff] w-1/5 rounded-lg drop-shadow-xl py-6 px-2'>
                <p className='mx-10 my-2'>"Deliveries are made super easy. I would recommend it to anyone looking to grow their restaurant."</p>
                <h1 className='mx-10 my-2'> ~ James T, PizzArea</h1>
            </div>
            <div className='bg-gradient-to-b from-white to-[#81f0ff] fte w-1/5 rounded-lg drop-shadow-xl py-6 px-2'>
                <p className='mx-10 my-2'>"My sales tripled within 4 months of setting up my cloud kitchen."</p>
                <h1 className='mx-10 my-2'> ~ Sarah M, Burgerino</h1>
            </div>
            <div className='bg-gradient-to-b from-white to-[#81f0ff] fte w-1/5 rounded-lg drop-shadow-xl py-6 px-2'>
                <p className='mx-10 my-2'>"Payments are seamless with Mum's Kitchen's secure payment software. I love it."</p>
                <h1 className='mx-10 my-2'> ~ Winston O, Wafflos</h1>
            </div>
            <div className='bg-gradient-to-b from-white to-[#81f0ff] fte w-1/5 rounded-lg drop-shadow-xl py-6 px-2'>
                <p className='mx-10 my-2'>"Setup is super easy for beginners. I would recommend it to anyone looking to be their own boss."</p>
                <h1 className='mx-10 my-2'> ~ Ryan R, Coffe Cube</h1>
            </div>
        </div>
        <button className='flex mx-auto mt-16 mb-10 text-[12px] bg-[#008ea0] text-white px-4 py-2 rounded-full border-[1px] hover:border-[#008ea0] border-white ease-in-out transition-all duration-300 shadow-md'>Read All</button>
    </div>
  )
}

export default Testimonial