import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add submission logic here
  };
  return (
    <form
      className="min-h-[80vh] flex items-center justify-center bg-gray-100"
      onSubmit={onSubmitHandler}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please {state === 'Sign Up' ? "Sign Up" : "Login"} to book an appointment
        </p>

        {/* It means when state is sign up only that time we show the full name we 
      done this because at login time the full name is not requrired only eamil address and password is required for the 
      sign up  */}

        {state === 'Sign Up' &&
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        }
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition"
        >
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {state === 'Sign Up' ? "Already have an account?" : "Don't have an account?"}{' '}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </form>
  );
};
export default Login;
