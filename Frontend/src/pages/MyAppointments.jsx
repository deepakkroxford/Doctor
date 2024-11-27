import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h2>
      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row">
            <div className="sm:w-1/3">
              <img src={item.image} alt={item.name} className="w-full h-48 sm:h-full object-cover" />
            </div>

            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.speciality}</p>
                <p className="text-gray-700 font-medium mb-1">Address:</p>
                <p className="text-gray-600">{item.address.line1}</p>
                <p className="text-gray-600 mb-2">{item.address.line2}</p>
                <p className="text-gray-700">
                  <span className="font-medium">Date & Time:</span> 28 July, 2024 | 8:30
                </p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  Pay Online
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MyAppointments

