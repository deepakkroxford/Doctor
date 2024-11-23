import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
   return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 sm:px-14 lg:px-12 my-10 md:mx-10 shadow-lg overflow-hidden">
      {/* Left-hand side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-20 lg:pl-5 relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-transparent opacity-70 rounded-lg"></div>
        {/* Content */}
        <div className="relative z-10">
          <div className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">
            <p>Book Appointment</p>
            <p className="mt-4">With 100+ Trusted Doctors</p>
          </div>
          <button onClick={()=>{navigate('/Login'); scrollTo(0,0)}} className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-110 transition-transform duration-300 ease-in-out">
            Create Account
          </button>
        </div>
      </div>

      {/* Right-hand side */}
      <div className="hidden md:flex md:w-1/2 lg:w-[400px] items-center justify-center relative">
        <img 
          className="w-full h-auto object-cover rounded-md" 
          src={assets.appointment_img} 
          alt="Appointment"
        />
      </div>
    </div>
  );
};
export default Banner;
