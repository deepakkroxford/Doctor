import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets_admin/assets'
import { XCircle, Users, Calendar, UserCheck } from 'lucide-react'

const Dashboard = () => {
  const { atoken, getDashData, appointmentCancel, dashData } = useContext(AdminContext)

  useEffect(() => {
    if (atoken) {
      getDashData()
    }
  }, [atoken, getDashData])

  return dashData && (
    <div className="m-5 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <DashboardCard icon={<Users className="w-8 h-8 text-blue-500" />} title="Doctors" value={dashData.doctors} />
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
                <img src={item.docData.image} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-gray-900">{item.docData.name}</p>
                  <p className="text-sm text-gray-500">{item.slotDate}</p>
                </div>
              </div>
              {item.cancelled ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
                  Cancelled
                </span>
              ) : (
                <button
                  onClick={() => appointmentCancel(item._id)}
                  className="text-red-600 hover:text-red-900 focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              )}
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

export default Dashboard