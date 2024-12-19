import React from 'react'
import { useContext } from 'react';
import LogIn from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import { DoctorContext } from './context/DoctorContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Admin/Dashboard';
import AllApointements from './pages/Admin/AllApointements';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';

import DoctorAppointments from './pages/Doctor/DoctorAppointments'
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
  const { atoken } = useContext(AdminContext);
  const {dToken } = useContext(DoctorContext);
  return atoken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <NavBar />
      <div className='flex items-start'>
        <SideBar />
        <Routes>
          {/* Admin Rotes */}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllApointements />} />
          <Route path='/add-doctor' element={<AddDoctor/>} />
          <Route path ='/doctor-list' element={<DoctorList/>}/>

          {/* Doctor Routes  */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}  />
          <Route path='/doctor-profile' element={<DoctorProfile/>}  />
          <Route path='/doctor-appointments' element={<DoctorAppointments/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <LogIn />
      <ToastContainer />
    </>
  );
};

export default App
