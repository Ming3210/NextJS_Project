"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/app/services/forClient/fetchUser";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  
  const [errors, setErrors] = useState<{ email?: string; password?: string } | null>(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUser());
      } finally {
        setLoading(false); // Stop loading after fetch is complete
      }
    };
    fetchData();
  }, [dispatch]);

  const userLogin = useSelector((state: any) => state.client.userList);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const validateForm = (): { isValid: boolean; matchedUser: any | null } => {
    let validationErrors: { email?: string; password?: string } = {};

    if (!inputValue.email) {
      validationErrors.email = "Email is required.";
    }
    if (!inputValue.password) {
      validationErrors.password = "Password is required.";
    }

    const matchedUser = userLogin?.find(
      (user: any) =>
        user.email.toLowerCase() === inputValue.email.toLowerCase() &&
        user.password === inputValue.password
    );

    if (inputValue.email && inputValue.password && !matchedUser) {
      validationErrors.email = "Invalid email or password.";
      validationErrors.password = "Invalid email or password.";
    }

    setErrors(validationErrors);

    return {
      isValid: Object.keys(validationErrors).length === 0 && !!matchedUser,
      matchedUser,
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const { isValid, matchedUser } = validateForm();
    
    if (!isValid) return;

    if (matchedUser) {
      // Save login state and user info in localStorage
      localStorage.setItem("userLoggedIn", JSON.stringify(matchedUser));
      localStorage.setItem("loginState", JSON.stringify(true));
      
      // Manually trigger the 'storage' event so that other components (HeaderWrapper) are notified
      window.dispatchEvent(new Event("storage"));

      // Redirect to home page
      router.push("/"); 
    } else {
      setErrors({ email: "Login failed. Please check your credentials." });
    }
  };

  const handleRedirect = () => {
    router.push("/sign-up");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-sky-500 overflow-hidden h-[100vh] flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md">
        <div className="bg-sky-600 text-white text-center text-2xl font-semibold py-4 rounded-t-lg">
          Login Form
        </div>
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <FaUser className="relative left-2 top-10 transform -translate-y-1/2 text-sky-600 text-xl" />
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              value={inputValue.email}
              placeholder="Email or Phone"
              className="w-full pl-12 py-2 border border-gray-300 rounded-lg focus:border-sky-600 focus:ring-1 focus:ring-sky-300 transition-all"
            />
            {errors?.email && <div className="text-red-600 mt-1 text-sm">{errors.email}</div>}
          </div>
          <div className="relative mb-4">
            <FaLock className="relative left-2 top-10 transform -translate-y-1/2 text-sky-600 text-xl" />
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
              value={inputValue.password}
              placeholder="Password"
              className="w-full pl-12 py-2 border border-gray-300 rounded-lg focus:border-sky-600 focus:ring-1 focus:ring-sky-300 transition-all"
            />
            {errors?.password && <div className="text-red-600 mt-1 text-sm">{errors.password}</div>}
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
            <span onClick={handleRedirect} className="text-sky-600 hover:underline cursor-pointer">
              Sign up now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
