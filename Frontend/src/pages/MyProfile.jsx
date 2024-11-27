import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Deepak Kumar Singh",
    image: assets.profile_pic,
    email: 'deepak@gmail.com',
    phone: '91 6207724981',
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London',
    },
    gender: 'male',
    dob: '1992-05-22',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mb-10">
      {/* Profile Image and Name */}
      <div className="flex items-center space-x-6">
        <img
          src={userData.image}
          alt="User"
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
        />
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
            onClick={() => setIsEdit(false)}
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
