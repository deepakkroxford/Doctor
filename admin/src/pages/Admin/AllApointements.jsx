import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContex'
import { XCircle } from 'lucide-react'

const AllAppointments = () => {
  const { atoken, appointments, getAllAppointments, appointmentCancel } = useContext(AdminContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (atoken) {
      getAllAppointments()
    }
  }, [atoken])

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 animate-fade-in">All Appointments</h1>
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3 hidden sm:table-cell">#</th>
                <th className="px-6 py-3">Patient</th>
                <th className="px-6 py-3 hidden sm:table-cell">Age</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Doctor</th>
                <th className="px-6 py-3">Fees</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                    <span className="text-sm text-gray-500">{index + 1}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-8 w-8 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" src={item.userData.image} alt={item.userData.name} />
                      <span className="ml-2 text-sm font-medium text-gray-900">{item.userData.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                    <span className="text-sm text-gray-500">{calculateAge(item.userData.dob)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{slotDateFormat(item.slotDate)}, {item.slotTime}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-8 w-8 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" src={item.docData.image} alt={item.docData.name} />
                      <span className="ml-2 text-sm font-medium text-gray-900">{item.docData.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{currency}{item.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.cancelled ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 transition-all duration-300 ease-in-out animate-pulse">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllAppointments