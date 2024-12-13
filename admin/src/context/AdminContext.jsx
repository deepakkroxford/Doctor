import { createContext, useState } from "react"
import axios from "axios"
import {toast} from 'react-toastify'
export const AdminContext = createContext();
const AdminContextProvider = (props) => {
  const [atoken, setAtoken] = useState(localStorage.getItem('atoken') ? localStorage.getItem('atoken') : '')
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [appointments,setAppointments] = useState([]);
  const [dashData,setDashData] = useState(false);

  {/* The line no -12 to 27 is responsible for calling the api for fetching the all doctor details 
    line no 13 is a useState hook that will store the output of the database in the array 
    line 17 -> we use the axios and it is used to make a api call {data } and we are extracting the data from it 
     we also add the middleware it means when token is verfy then only we fetch the all doctor*/}

  const [doctors, setDoctors] = useState([])
  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(backendUrl +'/api/admin/all-doctors', {}, { headers: { atoken } })
      if (data.success) {
        setDoctors(data.doctors)
        console.log(data.doctors)
      }
      else {
        toast.error(data.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  const changeAvailablity = async (docId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/admin/change-availability',{docId},{headers:{atoken}})
      if(data.success)
      {
        toast.success(data.message);
        getAllDoctors()
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getAllAppointments = async()=>{
    try{
      const {data} = await axios.get(backendUrl+'/api/admin/get-allappointments',{headers:{atoken}})
      if(data.success){
        setAppointments(data.appointments.reverse()) // to show the appointments in descending order of date  // reverse() method is used to reverse the order of array elements.  // reverse() modifies the original array.  // array.reverse() is a in-place operation that modifies the original array and returns the array.
        console.log(data.appointments)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const appointmentCancel = async(appointmentId)=>{
     try{
      const {data} = await axios.post(backendUrl+'/api/admin/cancel',{appointmentId},{headers:{atoken}})
      if(data.success){
        toast.success(data.message)
        getAllAppointments()
      }
      else{
        toast.error(data.message)
      }
     }
     catch(error){
       console.log(error.message)
       toast.error(error.message)
     }
  }

  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { atoken } })
      if (data.success) {
        setDashData(data.dashData)
        console.log(data.dashData)
      }
      else {
        toast.error(data.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  const value = {
    atoken, setAtoken,
    backendUrl,getAllDoctors,doctors,
    changeAvailablity,getAllAppointments,
    appointments,setAppointments,appointmentCancel,getDashData,dashData
  }
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
