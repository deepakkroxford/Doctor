import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div>
        <p className='text-4xl text-center p-4 text-gray-700'>About <span><b>US</b></span></p>
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-700'>Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why<span className='text-gray-700 font-semibold'> Choose Us ?</span></p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mb-20 space-y-8 md:space-y-0 md:space-x-6">
  <div className="flex-1 text-center md:text-left border border-gray-300 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 min-h-[200px]">
    <b className="block text-lg font-semibold text-gray-800 mb-2">Efficiency</b>
    <p className="text-gray-600">
      Streamlined appointment scheduling that fits into your busy lifestyle.
    </p>
  </div>

  <div className="flex-1 text-center md:text-left border border-gray-300 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 min-h-[200px]">
    <b className="block text-lg font-semibold text-gray-800 mb-2">Convenience</b>
    <p className="text-gray-600">
      Access to a network of trusted healthcare professionals in your area.
    </p>
  </div>

  <div className="flex-1 text-center md:text-left border border-gray-300 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 min-h-[200px]">
    <b className="block text-lg font-semibold text-gray-800 mb-2">Personalization</b>
    <p className="text-gray-600">
      Tailored recommendations and reminders to help you stay on top of your health.
    </p>
  </div>
</div>




    </div>
  )
}

export default About
