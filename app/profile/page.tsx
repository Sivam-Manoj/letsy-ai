'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { FaBell, FaUserCircle, FaUpload } from 'react-icons/fa';

interface FormData {
  firstName: string;
  lastName: string;
  oldPassword: string;
  newPassword: string;
  profileImage: FileList | null;
}

const ProfileView = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [profilePreview, setProfilePreview] = useState<string | null>("/default-avatar.png");
  const [isEditing, setIsEditing] = useState(false); // Controls view mode
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setProfilePreview(imageUrl);
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Profile updated:", data);
    alert("Profile updated successfully!");
    setIsEditing(false); // Close form after submission
  };

  const handleDeleteUser = () => {
    // Open the confirmation modal
    setIsModalOpen(true);
  };

  const confirmDeleteUser = () => {
    // Perform the delete operation (this is a placeholder)
    alert("User deleted successfully!");
    setIsModalOpen(false);
    // You can add actual logic here to delete the user, e.g., API call
  };

  const cancelDeleteUser = () => {
    // Close the modal without deleting the user
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#c95d17] to-[#a64700] relative">
      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center px-4 sm:px-6 md:px-8">
        {/* Profile View */}
        <div className="flex justify-center items-center w-full">
          {isEditing ? (
            /** Profile Update Form */
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full sm:w-96 md:w-[450px] lg:w-[500px]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-center">
                {/* Profile Picture */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center relative">
                    {profilePreview ? (
                      <Image src={profilePreview} alt="Profile" width={128} height={128} className="object-cover" />
                    ) : (
                      <FaUserCircle className="text-gray-500 text-6xl" />
                    )}
                    {/* Add any icon inside the profile image circle */}
                    {!profilePreview && (
                      <FaBell className="absolute text-white text-xl top-1 right-1" />
                    )}
                  </div>
                  {/* Upload Button */}
                  <label className="mt-3 bg-gray-200 px-4 py-2 rounded cursor-pointer text-gray-800 flex items-center space-x-2">
                    <FaUpload className="text-gray-700" />
                    <span>Upload</span>
                    <input type="file" className="hidden" onChange={handleImageChange} />
                  </label>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", { required: "First name is required" })}
                      className="w-full p-3 border border-gray-400 rounded bg-white text-black"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", { required: "Last name is required" })}
                      className="w-full p-3 border border-gray-400 rounded bg-white text-black"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="password"
                      placeholder="Old Password"
                      {...register("oldPassword", { required: "Old password is required" })}
                      className="w-full p-3 border border-gray-400 rounded bg-white text-black"
                    />
                    {errors.oldPassword && <p className="text-red-500 text-sm">{errors.oldPassword.message}</p>}
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="New Password"
                      {...register("newPassword", { required: "New password is required" })}
                      className="w-full p-3 border border-gray-400 rounded bg-white text-black"
                    />
                    {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                  <button type="submit" className="w-full py-3 rounded-xl font-bold text-lg bg-orange-500 text-white shadow-lg transition transform hover:scale-105 active:scale-95 hover:shadow-xl">
                    Save
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="w-full py-3 rounded-xl font-bold text-lg bg-gray-400 text-black shadow-lg transition transform hover:scale-105 active:scale-95 hover:shadow-xl">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /** Profile Card */
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center w-full sm:w-96 md:w-[450px] lg:w-[500px]">
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center relative">
                  {profilePreview ? (
                    <Image src={profilePreview} alt="Profile" width={128} height={128} />
                  ) : (
                    <FaUserCircle className="text-gray-500 text-6xl" />
                  )}
                  {/* Add any icon inside the profile image circle */}
                  {!profilePreview && (
                    <FaBell className="absolute text-white text-xl top-1 right-1" />
                  )}
                </div>
              </div>

              {/* Name & Email */}
              <h2 className="text-xl font-semibold mt-4 text-gray-800">John Doe</h2>
              <p className="text-gray-600">john@email.com</p>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button onClick={() => setIsEditing(true)} className="w-full py-3 rounded-xl font-bold text-lg bg-orange-500 text-white shadow-lg transition transform hover:scale-105 active:scale-95 hover:shadow-xl">
                  Update Profile
                </button>
                <button onClick={handleDeleteUser} className="w-full py-3 rounded-xl font-bold text-lg bg-red-600 text-white shadow-lg transition transform hover:scale-105 active:scale-95 hover:shadow-xl">
                  Delete User
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h3 className="text-lg font-semibold text-gray-800">Are you sure you want to delete this user?</h3>
            <div className="flex justify-between mt-4">
              <button onClick={confirmDeleteUser} className="w-full py-3 rounded-xl font-bold text-lg bg-red-600 text-white shadow-lg transition transform hover:scale-105 active:scale-95 hover:shadow-xl">
                Yes, Delete
              </button>
              <button onClick={cancelDeleteUser} className="w-full py-3 rounded-xl font-bold text-lg bg-gray-400 text-black shadow-lg transition transform hover:scale-105 active:scale-95 hover:shadow-xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
