'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormData {
  verificationCode: string;
}

const VerificationCode = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle verification logic here
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-200 shadow-md rounded-md">
      <h2 className="text-xl font-bold text-center">Verify Code</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Verification Code */}
        <div>
        <h4 className="text-sm text-left">Please Enter the Code Sent to Your Email</h4>

          <input
            id="verificationCode"
            type="text"
            {...register("verificationCode", { required: "Verification Code is required" })}
            placeholder="Enter your verification code"
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.verificationCode && <p className="text-red-500 text-xs">{errors.verificationCode?.message}</p>}
        </div>

        <button
  type="submit"
  className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-md shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
>
  Verify
</button>

        {/* Sign In Link */}
        <p className="text-sm text-center">
          Go Back to <a href="/sign-in" className="text-blue-500 underline">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default VerificationCode;
