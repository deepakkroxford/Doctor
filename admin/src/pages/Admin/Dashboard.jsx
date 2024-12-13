import React from 'react'
import { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets_admin/assets'

const Dashboard = () => {
  const { aToken, getDashData, appointmentCancel, dashData } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])


  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>

        <div>
          <img src={assets.doctor_icon} alt="" />
          <div>
            <p>{dashData.doctors}</p>
            <p>Doctors</p>
          </div>
        </div>

        <div>
          <img src={assets.appointment_icon} alt="" />
          <div>
            <p>{dashData.appointments}</p>
            <p>Appointments</p>
          </div>
        </div>

        <div>
          <img src={assets.patients_icon} alt="" />
          <div>
            <p>{dashData.patients}</p>
            <p>patients</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard
