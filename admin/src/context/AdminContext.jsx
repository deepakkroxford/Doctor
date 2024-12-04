import { createContext, useState } from "react"
import axios from "axios"
import {toast} from 'react-toastify'
export const AdminContext = createContext();
const AdminContextProvider = (props) => {
  const [atoken, setAtoken] = useState(localStorage.getItem('atoken') ? localStorage.getItem('atoken') : '')
  const backendUrl = import.meta.env.VITE_BACKEND_URL


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


  const value = {
    atoken, setAtoken,
    backendUrl,getAllDoctors,doctors,
    changeAvailablity
  }
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
