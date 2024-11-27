import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold '>Us</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact Us" />

        <div className="flex flex-col justify-center items-start gap-6 bg-white p-6 shadow-lg rounded-lg border border-gray-300">
          <p className="text-lg font-semibold text-gray-800">Our Office</p>
          <p className="text-gray-600">54709 Willms Station Suite 350, Washington, USA</p>
          <p className="text-gray-600">Tel: <span className="font-semibold">(415) 555‑0132</span></p>
          <p className="text-gray-600">Email: <a href="mailto:greatstackdev@gmail.com" className="text-blue-600 hover:underline">greatstackdev@gmail.com</a></p>
          <p className="text-lg font-semibold text-gray-800">Careers at PRESCRIPTO</p>
          <p className="text-gray-600">Learn more about our teams and job openings.</p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
