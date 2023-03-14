import React from "react"
import img from './title-pic.png'

const Footer = () => {
  return (
    <>
        <div className="bg-[#81f0ff] p-10 flex">
            <div className='TITLE flex text-xl font-medium text-black'>
                <p>Mum's Kitchen</p>
                <img className='h-6 mx-2' src={img} alt="" />
            </div>
            <div className="flex space-x-36 mx-auto">
                <div>
                    <h1 className="font-semibold mb-8">COMPANY</h1>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Careers</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Locations</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Privacy Policy</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Terms & Conditions</p>
                </div>
                <div>
                    <h1 className="font-semibold mb-8">SOLUTIONS</h1>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Kitchens</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Technology</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Delivery</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Partners</p>
                </div>
                <div>
                    <h1 className="font-semibold mb-8">CONTACT</h1>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Phone</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Email</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Instagram</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Facebook</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">Twitter</p>
                    <p className="cursor-pointer my-2 hover:opacity-50 ease-in-out transition-all duration-100">LinkedIn</p>
                </div>
            </div>
        </div>
        <div className="bg-teal-900 py-2 flex">
            <h1 className="text-sm text-white mx-auto">&#169;2023 Mum's Kitchen LLP. All Rights Reserved.</h1>
        </div>
    </>
  )
}

export default Footer
