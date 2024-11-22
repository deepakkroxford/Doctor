import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-2xl px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 py-8 md:py-[8vw] text-center md:text-left">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctor
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white text-sm font-light">
          <img className="w-24 sm:w-28 md:w-32" src={assets.group_profiles} alt="Group Profiles" />
          <p className="max-w-lg">
            Simply browse through our extensive list of trusted doctors, 
            <br className="hidden sm:block" /> schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-white text-gray-600 rounded-full text-sm hover:scale-105 transition-transform duration-300"
        >
          Book Appointment
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative mt-8 md:mt-0">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg object-contain md:object-cover"
          src={assets.header_img}
          alt="Header Image"
        />
      </div>
    </div>
  );
};

export default Header;
