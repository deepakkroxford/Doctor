import React from 'react'
import { useContext } from 'react';
import LogIn from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllApointements from './pages/Admin/AllApointements';
import AddDoctor from './pages/Admin/AddDoctor';

const App = () => {
  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <NavBar />
      <div className='flex items-start'>
        <SideBar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllApointements />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
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
