import Link from "next/link";
import React, { useState } from "react";


export default function SignUp() {
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmError, setConfirmError] = React.useState("");

    const [phoneNumber, setPhone] = React.useState("");

    const [isLoading, setIsLoading] = useState(false);

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


    const onSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        setIsLoading(true);

        alert(`${fullName}, ${email}, ${password}, ${phoneNumber}`);

        setIsLoading(false);

        // API call to register user
        // await doRequest();
    };

    return (
        <div className="p-5 flex gap-[10vw]">
            <div className="w-[80vw] h-[95vh] rounded-md bg-green-950 bg-center bg-cover bg-no-repeat hidden md:block"
                style={{backgroundImage: `url('/images/bg.jpg')`}}
            >
                {/* <div className="w-full h-full bg-black bg-opacity-40 rounded-md">

                </div> */}
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-full p-10 lg:max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-gray-700">
                        Register
                    </h1>

                    <form onSubmit={onSubmit} className="mt-2">
                        <div className="mb-2">
                            <label
                                htmlFor="FullName"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Your Name 
                            </label>
                            <input
                                value={fullName}
                                placeholder ="Full name"
                                type="text"
                                required
                                onChange={(e) => {
                                    const name = e.target.value;
                                    if (!/\d/.test(name)) {
                                        setFullName(name);
                                    }
                                  }}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />

                        </div>
                    
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Phone number
                            </label>
                            <input
                                value={phoneNumber}
                                placeholder="Phone Number"
                                onChange={ (e) => {
                                    if (e.target.value.length <= 10) {
                                        setPhone(e.target.value);
                                      }
                                    }}
                                
                                type="number"
                                maxLength={10}
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
                                id="password"

                                placeholder="Password"
                                onChange={checkPassword}
                                type="password"
                                required
            minLength={8}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
          <p className="text-red-500">{confirmError !== "" && confirmError}</p>

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
                        Already have an account?{" "}
                        <Link
                            href="/auth/signin"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
