import React, { useState } from 'react';
import { useContext } from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { AppContext } from '../context/AppContext';
import { toast } from'react-toastify';
import axios from 'axios';
const Profile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('dob', userData.dob);
      formData.append('gender', userData.gender);

      image && formData.append('image', image);

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } });
      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      }
      else {
        toast.error(data.message)
      }

    }
    catch(error)
    {
      console.log(error);
      toast.error(error.message)
      }
    
  }

  return userData && (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mb-10">
      {
        isEdit ?
          <label htmlFor="image">
            <div className='iniline-block relative cursor-pointer '>
              <img className='w-36 rounded opacity-90' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
              <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
          </label>
          :
          <img className='w-36 rounded ' src={userData.image} alt="" />

      }
      {/* Profile Image and Name */}
      <div className="flex items-center space-x-6">
        <div>
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
          )}
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      {/* Contact Information */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Contact Information</h2>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm text-gray-600">Email:</p>
            <p className="text-gray-800">{userData.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800">{userData.phone}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-600">Address:</p>
            {isEdit ? (
              <div>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="border p-2 rounded-md w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ) : (
              <p className="text-gray-800">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      {/* Basic Information */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Basic Information</h2>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm text-gray-600">Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <p className="text-gray-800">{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-600">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-800">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      {/* Edit/Save Button */}
      <div className="text-center">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
