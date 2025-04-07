'use client'

import Link from 'next/link';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-700 via-orange-600 to-orange-900">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg border border-orange-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-600 drop-shadow-[0_0_6px_rgba(255,115,0,0.9)]">
          Create Your <span className="text-orange-500">Letsy AI</span> Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name Fields */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", { required: "First Name is required" })}
                placeholder="Enter first name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>

            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                id="lastName"
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                placeholder="Enter last name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No</label>
            <input
              id="phone"
              type="tel"
              {...register("phone", { required: "Phone Number is required" })}
              placeholder="Enter phone no"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:from-orange-500 hover:to-red-600 transition-all shadow-md"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-orange-500 underline hover:text-orange-600">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
