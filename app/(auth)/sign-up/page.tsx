'use client'

import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

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
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-200 shadow-md rounded-md">
      <h2 className="text-xl font-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className="flex gap-4">
          {/* First Name */}
          <div className="w-1/2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              id="firstName"
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              placeholder="Enter first name"
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName?.message}</p>}
          </div>

          {/* Last Name */}
          <div className="w-1/2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              id="lastName"
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Enter last name"
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName?.message}</p>}
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
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone?.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter email"
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email?.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter password"
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password?.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded-md"
        >
          Sign Up
        </button>

        {/* Sign in Link */}
        <p className="text-sm text-center">
          Already have an account? <a href="/sign-in" className="text-blue-500 underline">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
