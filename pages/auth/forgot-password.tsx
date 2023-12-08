import Link from "next/link";
import React, { useState } from "react";


export default () => {

  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

     // Make API call that will send SMS or Email to user to reset password
    alert(email);

  };



return (
<div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Provide your email</h1>
        <form onSubmit={onSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
               placeholder ="email@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              type="email"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        
          {     
          isLoading ?
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>:
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Submit
            </button>
          </div>
          }
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
);
}