import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctor = ({ speciality, docId }) => {

    const navigate = useNavigate();
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDocs] = useState([]);

    useEffect(() => {
        console.log("Doctors:", doctors);
        console.log("Speciality:", speciality, "Doc ID:", docId);
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    }, [doctors, speciality, docId])

    const handelNavigation = () => {
        scrollTo(0, 0);
        navigate('/doctor')
    }
    return (
        <section className="py-16 px-4 md:px-8 ">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Doctors to Book</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Simply browse through our extensive list of trusted doctors and find the perfect specialist for your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relDoc.slice(0, 4).map((items, index) => (

                        <div onClick={() => { navigate(`/appointment/${items._id}`), scrollTo(0, 0) }}
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <img
                                className="w-full h-fit object-cover object-center"
                                src={items.image}
                                alt={items.name}
                            />
                            <div className="p-6">
                                <div className="flex items-center mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                    <span className="text-sm font-medium text-green-600">Available</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{items.name}</h3>
                                <p className="text-gray-600">{items.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button onClick={handelNavigation} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        View More Doctors
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RelatedDoctor;
