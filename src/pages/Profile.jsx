import React from 'react'

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
        Profile
      </h2>
      <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="font-medium w-32">Name:</label>
            <input
              type="text"
              className="flex-1 p-2 border rounded-md"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="font-medium w-32">Email:</label>
            <input
              type="email"
              className="flex-1 p-2 border rounded-md"
              placeholder="Your email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile