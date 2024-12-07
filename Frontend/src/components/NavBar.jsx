import React, { useState, useEffect, useRef, useContext } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  // const [token, setToken] = useState(true);
  const {token,setToken,userData} = useContext(AppContext);

  const logout =()=>{
    setToken(false);
    localStorage.removeItem('token');
  }

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
              <img className='w-8 h-8 rounded-full object-cover' src={userData.image} alt="Profile" />
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
                  <p onClick={() => { navigate('/MyAppointment'); setIsDropdownOpen(false); }} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out'>My Appointment</p>
                  <p onClick={  logout} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out'>Logout</p>
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

        <img  onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* Mobile menu */}
        <div className={`${showMenu ? `fixed w-full`: `h-0 w-0` }  md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>

          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
           <NavLink  onClick={()=>setShowMenu(false)} to={'/'}> <p className='px-4 py-3 rounded-full inline-block'>Home</p></NavLink>
           <NavLink  onClick={()=>setShowMenu(false)} to={'/doctor'}> <p className='px-4 py-3 rounded-full inline-block'>All Doctors</p> </NavLink>
           <NavLink  onClick={()=>setShowMenu(false)} to={'/about'}> <p className='px-4 py-3 rounded-full inline-block'>About</p> </NavLink>
           <NavLink  onClick={()=>setShowMenu(false)} to={'/contact'}> <p className='px-4 py-3 rounded-full inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default NavBar

