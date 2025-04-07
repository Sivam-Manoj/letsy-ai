'use client'

import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { toast } from 'react-toastify';

interface FormData {
  email: string;
  phone: string;
  password: string;
}

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-700 via-orange-600 to-orange-900">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg border border-orange-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-600 drop-shadow-[0_0_6px_rgba(255,115,0,0.9)]">
          Sign In to <span className="text-orange-500">Letsy AI</span>
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:from-orange-500 hover:to-red-600 transition-all shadow-md"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="text-orange-500 underline hover:text-orange-600">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
