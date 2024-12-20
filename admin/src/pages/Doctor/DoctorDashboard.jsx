import React from 'react'
import { useContext,useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { XCircle, BadgeDollarSign, Calendar, UserCheck } from 'lucide-react'
import { assets } from '../../assets/assets_admin/assets'
import { AppContext } from '../../context/AppContex'

const DoctorDashboard = () => {
  const {dashData,setDashData,getDashData,dToken,cancelAppointment,completeAppointment} = useContext(DoctorContext)

  useEffect(()=>{
    if(dToken){
    getDashData()
    }
  },[dToken])

  return dashData &&  (
    <div className="m-5 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <DashboardCard icon={<BadgeDollarSign  className="w-8 h-8 text-blue-500" />} title="Earning" value={dashData.earnings} />
        <DashboardCard icon={<Calendar className="w-8 h-8 text-green-500" />} title="Appointments" value={dashData.appointments} />
        <DashboardCard icon={<UserCheck className="w-8 h-8 text-purple-500" />} title="Patients" value={dashData.patients} />
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 bg-gray-50 border-b">
          <img src={assets.list_icon} alt="" className="w-5 h-5" />
          <h2 className="font-semibold text-gray-700">Latest Bookings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {dashData.latestAppointments.map((item, index) => (
            <div key={index} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
              <div className="flex items-center space-x-4">
                <img src={item.userData.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-gray-900">{item.userData.name}</p>
                  <p className="text-sm text-gray-500">{item.slotDate}</p>
                </div>
              </div>
              {
            item.cancelled ?
            <p className='text-xs text-red-600'>Cancelled</p> :
             item.isCompleted ? 
             <p className='text-green-500'>Completed</p> 
             :
            <div className='flex'>
            <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer'  src={assets.cancel_icon} alt="" />
            <img onClick={()=>completeAppointment(item._id)}  className='w-10 cursor-pointer'  src={assets.tick_icon} alt="" />
           </div>
           }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const DashboardCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4">
    <div className="p-3 rounded-full bg-gray-100">{icon}</div>
    <div>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
)


export default DoctorDashboard
