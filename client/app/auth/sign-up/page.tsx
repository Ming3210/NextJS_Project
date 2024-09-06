"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface FormData {
  fullname: string;
  email: string;
  password: string;
  date: string;
  gender: string;
}

interface Errors {
  fullname?: string;
  email?: string;
  password?: string;
  date?: string;
  gender?: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    password: '',
    date: '',
    gender: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!formData.fullname) newErrors.fullname = "Enter your full name";
    if (!emailPattern.test(formData.email)) newErrors.email = "Enter a valid email address";
    if (!formData.password) newErrors.password = "Enter your password";
    if (!formData.date) newErrors.date = "Select your date of birth";
    if (!formData.gender) newErrors.gender = "Select your gender";

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log('Form data submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-400 p-4">
      <form onSubmit={handleSubmit} className="p-6 bg-white max-w-lg w-full rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Form Validation</h2>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className={`w-full h-12 px-3 border rounded-md ${errors.fullname ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-gray-500`}
          />
          {errors.fullname && <small className="text-red-500 text-sm mt-1 block">{errors.fullname}</small>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 px-3 border rounded-md ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-gray-500`}
          />
          {errors.email && <small className="text-red-500 text-sm mt-1 block">{errors.email}</small>}
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full h-12 px-3 border rounded-md ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-gray-500`}
          />
          <div
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-0 top-7 flex items-center pr-3 cursor-pointer"
          >
            {passwordVisible ? <FaEyeSlash className="w-6 h-6 text-gray-500" /> : <FaEye className="w-6 h-6 text-gray-500" />}
          </div>
          {errors.password && <small className="text-red-500 text-sm mt-1 block">{errors.password}</small>}
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium mb-2">Birth Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full h-12 px-3 border rounded-md ${errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-gray-500`}
          />
          {errors.date && <small className="text-red-500 text-sm mt-1 block">{errors.date}</small>}
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium mb-2">Gender</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full h-12 px-3 border rounded-md ${errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-gray-500`}
          >
            <option value="" disabled>Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <small className="text-red-500 text-sm mt-1 block">{errors.gender}</small>}
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full h-12 text-white bg-teal-500 hover:bg-teal-600 rounded-lg font-medium transition-colors">Submit</button>
        </div>
      </form>
    </div>
  );
};


