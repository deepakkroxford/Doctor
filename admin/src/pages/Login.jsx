import React, { useContext, useState } from 'react';
import {AdminContext} from '../context/AdminContext'
import axios from 'axios';
import { toast } from'react-toastify';
import { DoctorContext } from '../context/DoctorContext';

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAtoken,backendUrl } = useContext(AdminContext);
    const {setDToken}  = useContext(DoctorContext);
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password })
                if (data.success) {
                    localStorage.setItem('atoken', data.token)
                    setAtoken(data.token)
                    toast.success(data.message)
                }
                else {
                   toast.error(data.message)
                }
            }
            else {
                const {data} = await axios.post(`${backendUrl}/api/doctor/login`,{email,password});
                if(data.success){
                    localStorage.setItem('dToken',data.token)
                    setDToken(data.token)
                    console.log(data.token)
                }
                else {
                    toast.error(data.message)
                }
            }
        }
        catch (error) {
            console.log(error)
            // Handle the error appropriately
        }
    }


    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex items-center justify-center min-h-screen bg-gray-100"
        >
            <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
                <p className="text-2xl font-semibold text-center mb-4">
                    <span className="text-blue-500">{state}</span> Login
                </p>

                <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Email</p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                    Login
                </button>

                <div className="mt-4 text-center">
                    {state === 'Admin' ? (
                        <p className="text-sm text-gray-600">
                            Doctor login{' '}
                            <span
                                onClick={() => setState('Doctor')}
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                click here
                            </span>
                        </p>
                    ) : (
                        <p className="text-sm text-gray-600">
                            Admin login{' '}
                            <span
                                onClick={() => setState('Admin')}
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                click here
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </form>
    );
};

export default Login;
