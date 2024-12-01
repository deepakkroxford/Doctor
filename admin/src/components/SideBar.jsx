import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets_admin/assets.js'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    const { atoken } = useContext(AdminContext)
    return (
        <div className='min-h-screen bg-white border-r'>
            {
                atoken && <ul className='text-[#515151]'>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`
                        }
                        to="/admin-dashboard"
                    >
                        <img src={assets.home_icon} alt="Dashboard Icon" />
                        <p>Dashboard</p>
                    </NavLink>



                    <NavLink  className={({ isActive }) =>
                            `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`
                        } to={'/all-appointments'}>
                        <img src={assets.appointment_icon} alt="" />
                        <p>Appointments</p>
                    </NavLink>

                    <NavLink  className={({ isActive }) =>
                            `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`
                        } to={'/add-doctor'}>
                        <img src={assets.add_icon} alt="" />
                        <p>Add doctor</p>
                    </NavLink>

                    <NavLink  className={({ isActive }) =>
                            `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`
                        } to={'/doctor-list'}>
                        <img src={assets.people_icon} alt="" />
                        <p>Doctor list</p>
                    </NavLink>
                </ul>
            }
        </div>
    )
}

export default SideBar
