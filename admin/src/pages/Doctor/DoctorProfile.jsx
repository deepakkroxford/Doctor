import React, { useContext, useEffect,useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContex';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
  const { backendUrl, dToken, getProfileData, profileData, setProfileData } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);
  const [isEdit ,setIsEdit] = useState(false);
  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  const updateProfile = async ()=>{
        try{
          const updateData = {
            address:profileData.address,
            fees:profileData.fees,
            about:profileData.about
          }
          const{data} = await axios.post(backendUrl+"/api/doctor/update-profile",updateData,{headers:{dToken}})
          if(data.success){
            toast.success(data.message)
            setIsEdit(false)
            getProfileData()
          }
          else{
            toast.error(data.message)
          }
        }catch(error){
          toast.error(error.message)
          console.log(error)
        }
  }

  return profileData && (
    <div>
      <div className='flex flex-col gap-4 m-5'>

        <div >
          <img className='bg-primary/80 w-full sm:max-w-64 rounded-lg  ' src={profileData.image} alt="" />
        </div>

        {/* ..... Doc Info : name,degree,experience */}
        <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>


          <p>{profileData.name}</p>
          <div>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button>{profileData.experience}</button>
          </div>

          {/* Doc About  */}
          <div>
            <p>About:</p>
            <p>
              {profileData.about}
            </p>
          </div>

          {/* Doc Contact */}
          <p>
            Appointment fee : <span>{currency} { isEdit? <input type="number" onChange={(e)=>setProfileData(prev=>({...prev,fees:e.target.value}))} value={profileData.fees} /> :profileData.fees}</span>
          </p>
        
          <div className="flex gap-2 py-2">
  <p>Address:</p>
  <p className="text-sm">
    {isEdit ? (
      <>
        <input
          type="text"
          onChange={(e) =>
            setProfileData((prev) => ({
              ...prev,
              address: { ...prev.address, line1: e.target.value },
            }))
          }
          value={profileData.address.line1}
        />
        <br />
        <input
          type="text"
          onChange={(e) =>
            setProfileData((prev) => ({
              ...prev,
              address: { ...prev.address, line2: e.target.value },
            }))
          }
          value={profileData.address.line2}
        />
      </>
    ) : (
      <>
        {profileData.address.line1}
        <br />
        {profileData.address.line2}
      </>
    )}
  </p>
</div>


        <div>
          <input onChange={()=>isEdit && setProfileData(prev=> ({...prev,available:!prev.available}) )} checked={profileData.available} type="checkbox" name="" id="" />
          <label htmlFor="">Available</label>
        </div>
        {
          isEdit?
          <button  onClick={updateProfile} className='border  border-primary rounded-full py-1 px-4 m-2 text-sm hover:bg-primary hover:text-white  transition-all '>Save</button>

          :
          <button  onClick={()=>setIsEdit(true)} className='border  border-primary rounded-full py-1 px-4 m-2 text-sm hover:bg-primary hover:text-white  transition-all '>Edit</button>

        }

        </div>
      </div>

    </div>
  )
}

export default DoctorProfile
