import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="bg-sky-500 overflow-hidden  h-[100vh] flex items-center justify-center ">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md">
        <div className="bg-sky-600 text-white text-center text-2xl font-semibold py-4 rounded-t-lg">
          Login Form
        </div>
        <form className="p-6">
          <div className="relative mb-4">
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sky-600 text-xl" />
            <input
              type="text"
              placeholder="Email or Phone"
              required
              className="w-full pl-12 py-2 border border-gray-300 rounded-lg focus:border-sky-600 focus:ring-1 focus:ring-sky-300 transition-all"
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sky-600 text-xl" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 py-2 border border-gray-300 rounded-lg focus:border-sky-600 focus:ring-1 focus:ring-sky-300 transition-all"
            />
          </div>
          <div className="mb-6 text-center">
            <a href="#" className="text-sky-600 hover:underline text-lg">
              Forgot password?
            </a>
          </div>
          <div className="mb-6">
            <input
              type="submit"
              value="Login"
              className="w-full py-2 text-white bg-sky-600 border border-sky-600 rounded-lg cursor-pointer hover:bg-sky-700 transition-all"
            />
          </div>
          <div className="text-center text-lg">
            Not a member?{" "}
            <a href="#" className="text-sky-600 hover:underline">
              Signup now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
