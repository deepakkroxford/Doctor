import React, { useState } from 'react';
import { assets } from '../../assets/assets_admin/assets';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const AddDoctor = () => {

  const [doctorImg, setDoctorImg] = useState('');
  const [doctorName, setDoctorName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fees, setFees] = useState('');
  const [speciality, setSpeciality] = useState('General Physician');
  const [experience, setExperience] = useState('1 year');
  const [education, setEducation] = useState('');
  const [about, setAbout] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { backendUrl, atoken } = useContext(AdminContext)

  const handleSubmit = async (e) => {

    e.preventDefault();
    // Handle form submission logic here

    try {
      if (!doctorImg) {
        return toast.error('Image Not Selected')
      }

      const formData = new FormData();
      formData.append('image', doctorImg);
      formData.append('name', doctorName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('fees', Number(fees));
      formData.append('speciality', speciality);
      formData.append('experience', experience);
      formData.append('about', about);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));
      formData.append('degree', education);


      //console log formData
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      })
      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { atoken } })
      console.log(data)
      if (data.success) {
        toast.success(data.message)

  {/*after submiting the the form all the field will be rest expect those field that are not mentions down  */}

        setDoctorImg('');
        setAddress1('');
        setAddress2('');
        setDoctorName('');
        setEmail('');
        setPassword('');
        setFees('');
        setEducation('');
        setExperience('')
      }
      else {
        toast.error(data.message)
      }

    }
    catch (error) {
      console.log(error)
      // Handle error appropriately
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-7xl mx-auto p-8 m-5 bg-white shadow-lg rounded-lg border border-gray-200"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Add Doctor
      </h2>

      {/* Image Upload Section */}
      <div className="mb-8 flex flex-col items-center">
        <div className="w-36 h-36 relative mb-4">
          <label
            htmlFor="doc-img"
            className="cursor-pointer block w-full h-full rounded-full overflow-hidden border-2 border-dashed border-gray-300 hover:border-indigo-500 transition-colors"
          >
            <img
              src={doctorImg ? URL.createObjectURL(doctorImg) : assets.upload_area}
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </label>
          <input
            onChange={(e) => setDoctorImg(e.target.files[0])}
            type="file"
            id="doc-img"
            className="hidden"
            accept="image/*"
          />
        </div>
        <p className="text-sm text-gray-600">Upload doctor picture</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Name Input */}
        <div>
          <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">
            Doctor Name
          </label>
          <input
            type="text"
            id="doctorName"
            required
            placeholder="Enter name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Fees Input */}
        <div>
          <label htmlFor="fees" className="block text-sm font-medium text-gray-700">
            Fees
          </label>
          <input
            type="number"
            id="fees"
            required
            placeholder="Enter fee"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Speciality Dropdown */}
        <div>
          <label htmlFor="speciality" className="block text-sm font-medium text-gray-700">
            Speciality
          </label>
          <select
            id="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {['General physician', 'Gynecologist', 'Neurologist', 'Pediatricians', 'Dermatologist', 'Gastroenterologist'].map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Dropdown */}
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
            Experience
          </label>
          <select
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year) => (
              <option key={year} value={`${year} year${year > 1 ? 's' : ''}`}>
                {year} year{year > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Education Input */}
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700">
            Education
          </label>
          <input
            type="text"
            id="education"
            required
            placeholder="Enter education (e.g., MBBS, MD)"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address 1 Input */}
        <div>
          <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
            Address Line 1
          </label>
          <input
            type="text"
            id="address1"
            placeholder="Enter address line 1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address 2 Input */}
        <div>
          <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            placeholder="Enter address line 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* About TextArea */}
      <div className="mt-6">
        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
          About
        </label>
        <textarea
          id="about"
          placeholder="Write about the doctor"
          rows={5}
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctor;
