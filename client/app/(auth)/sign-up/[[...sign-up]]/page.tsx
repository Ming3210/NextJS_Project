"use client";
import { fetchUser } from "@/app/services/forClient/fetchUser";
import { register } from "@/app/services/forClient/register";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    gender: "",
    create_at: new Date().toISOString().slice(0, 10),
    bio: "",
    banner: "https://th.bing.com/th/id/OIP.VoXO6QAJnMcud_Oig38WBQHaB2?rs=1&pid=ImgDetMain",
    avatar: "https://th.bing.com/th/id/R.e6453f9d07601043e5b928d25e129948?rik=JPSLKIXFf8DmmQ&pid=ImgRaw&r=0",
    group: [],
    follow: [],
    friends: [],
  });

  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.client); // Sử dụng state từ Redux

  console.log(state);
  


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required";
    } else {
      const today = new Date();
      const birthDate = new Date(formData.dateOfBirth);
      let age: any = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old";
      }
    }

    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.gender) newErrors.gender = "Please select your gender";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const existingUser = state.userList.find((user: any) => user.email === formData.email);
      if (existingUser) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          email: "Email already exists",
        }));
        return;
      }

      dispatch(register(formData));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-6">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Prefer not to say"
                  checked={formData.gender === "Prefer not to say"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Other
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 rounded hover:from-purple-500 hover:to-blue-400 transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
