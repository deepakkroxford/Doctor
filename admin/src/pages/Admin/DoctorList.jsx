import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'


const DoctorList = () => {
  const { doctors, atoken, getAllDoctors, changeAvailablity } = useContext(AdminContext)

  useEffect(() => {
    if (atoken) {
      getAllDoctors()
    }
  }, [atoken, getAllDoctors])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">All Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={item.image} alt={item.name} className="bg-indigo-50 group-hover:bg-primary transition-all duration-100 w-full h-100 object-cover" />
            <div className="p-4">
              <p className="text-xl font-semibold text-gray-800 mb-2">{item.name}</p>
              <p className="text-gray-600 mb-4">{item.speciality}</p>

              <div className="mt-2 flex items-center gap-1 text-sm">
                <input
                  type="checkbox"
                  checked={item.available} // Corrected typo in "availabe" to "available"
                  onChange={() => changeAvailablity(item._id)}
                />
                {item.available ? (
                  <p className="text-green-600">Available</p>
                ) : (
                  <p>Not Available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default DoctorList