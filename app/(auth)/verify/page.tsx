'use client';

import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  verificationCode: string;
}

const VerificationCode = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle verification logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#c95d17] to-[#a64700] p-6">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-4xl font-extrabold text-center text-orange drop-shadow-md mb-6 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text animate-pulse">
          Letsy AI
        </h2>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Verify Code
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Enter the code sent to your email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Verification Code Input */}
          <div>
            <label htmlFor="verificationCode" className="block text-lg font-semibold text-gray-700">
              Verification Code
            </label>
            <input
              id="verificationCode"
              type="text"
              {...register("verificationCode", { required: "Verification Code is required" })}
              placeholder="Enter your code"
              className="mt-2 p-4 w-full text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white shadow-sm placeholder-gray-400"
            />
            {errors.verificationCode && (
              <p className="text-red-500 text-sm mt-1">{errors.verificationCode.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transition transform hover:scale-105 active:scale-95 hover:shadow-xl"
          >
            Verify
          </button>
        </form>

        {/* Back to Sign In */}
        <p className="text-md text-center text-gray-600 mt-6">
          Back to{' '}
          <Link href="/sign-in" className="text-orange-600 font-semibold hover:underline transition-all">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerificationCode;
