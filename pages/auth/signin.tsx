import Link from "next/link";
import React, { useState } from 'react';


export default function Signin() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [confirmError, setConfirmError] = React.useState('');
  
  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setConfirmError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      setConfirmError('');
    }
    setPassword(password);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // some API call to your API
    // await doRequest();  hooks to come
    console.log(email, password);

    alert(`${email}, ${password}`);

    // setIsLoading(false);
  };


return (
  <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
      <h1 className="text-3xl font-bold text-center text-gray-700">Log in</h1>
      <form onSubmit={onSubmit} className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
           value={email}
           onChange={e => setEmail(e.target.value)}
            type="email"
            id="email"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            value={password}
            onChange={checkPassword}
            type="password"
            id="password"
            required
            minLength={8}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <p className="text-red-500">{confirmError !== "" && confirmError}</p>
        </div>
        {     
            isLoading ?
        <div id="loading-spinner" data-testid="loading-spinner" className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>:
      
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
         }
      </form>
      <p className="mt-4 text-sm text-center text-gray-700">
          Dont have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
        
        <p className="mt-4 text-sm text-center text-gray-700">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-blue-600 hover:underline"
          >
            Forgot password
          </Link>
        </p>
    </div>
  </div>
);
}
