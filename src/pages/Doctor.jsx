import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctor = () => {
  const { speciality } = useParams()

  const navigate = useNavigate();

  {/* This will give me the data of the all doctor */ }
  const { doctors } = useContext(AppContext)
  {/* This is used to filter the doctor according to their speciality */ }
  const [filterDoc, setFilterDoc] = useState([])

  {/* This is the logic to for the filter */ }
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row item-start gap-5 mt-5'>
        <div className='flex-col gap-4 text-sm text-gray-500'>
          <p
            onClick={() => speciality === 'General physician' ? navigate('/doctor') : navigate('/doctor/General physician')}
            className={`w-[94vw] sm:w-auto px-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}`}
          >
            General physician
          </p>
          <p
            onClick={() => speciality === 'Gynecologist' ? navigate('/doctor') : navigate('/doctor/Gynecologist')}
            className={`w-[94vw] sm:w-auto px-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Gynecologist
          </p>
          <p
            onClick={() => speciality === 'Dermatologist' ? navigate('/doctor') : navigate('/doctor/Dermatologist')}
            className={`w-[94vw] sm:w-auto px-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Dermatologist
          </p>
          <p
            onClick={() => speciality === 'Pediatricians' ? navigate('/doctor') : navigate('/doctor/Pediatricians')}
            className={`w-[94vw] sm:w-auto px-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Pediatricians
          </p>
          <p
            onClick={() => speciality === 'Neurologist' ? navigate('/doctor') : navigate('/doctor/Neurologist')}
            className={`w-[94vw] sm:w-auto px-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Neurologist
          </p>
          <p
            onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctor') : navigate('/doctor/Gastroenterologist')}
            className={`w-[94vw] sm:w-auto px-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className='w-full grid grid-cols-auto gap-6 m-3'>
          {filterDoc.map((doctor, index) => (
            <div onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                className="w-full h-fit object-cover object-center"
                src={doctor.image}
                alt={doctor.name}
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm font-medium text-green-600">Available</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctor
