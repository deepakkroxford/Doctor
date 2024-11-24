import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  {/* This i use for when i click to the image the drop-down will open and when i click again then drop-down will close */ }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1 '>Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-auto m-auto hidden" />
        </NavLink>
        <NavLink to='/doctor' >
          <li className='py-1 '>All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-auto m-auto hidden" />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1 '>About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-auto m-auto hidden" />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1 '>Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-auto m-auto hidden" />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='relative' ref={dropdownRef}>
            <div
              className='flex items-center gap-2 cursor-pointer'
              onClick={toggleDropdown}
            >
              <img className='w-8 h-8 rounded-full object-cover' src={assets.profile_pic} alt="Profile" />
              <img
                className={`w-2.5 h-2.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                src={assets.dropdown_icon}
                alt=""
              />
            </div>
            {isDropdownOpen && (
              <div className='absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-20'>
                <div className='py-1'>
                  <p onClick={() => { navigate('/Profile'); setIsDropdownOpen(false); }} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out'>My Profile</p>
                  <p onClick={() => { navigate('/Appointment'); setIsDropdownOpen(false); }} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out'>My Appointment</p>
                  <p onClick={() => { setToken(false); setIsDropdownOpen(false); }} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out'>Logout</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/Login')}
            className='bg-primary text-white px-6 py-2 rounded-lg font-medium hidden md:block hover:bg-primary-dark transition-colors'
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  )
}
export default NavBar
