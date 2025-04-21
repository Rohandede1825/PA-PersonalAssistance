import React from 'react'

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
        Settings
      </h2>
      <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between">
          <div>
            <h3 className="font-medium">Dark Mode</h3>
            <p className="text-sm text-gray-500">Toggle dark mode theme</p>
          </div>
          <button className="bg-[#01A9B6] text-white px-4 py-2 rounded-md hover:bg-[#018791] transition">
            Toggle
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between">
          <div>
            <h3 className="font-medium">Notifications</h3>
            <p className="text-sm text-gray-500">Manage notification settings</p>
          </div>
          <button className="bg-[#01A9B6] text-white px-4 py-2 rounded-md hover:bg-[#018791] transition">
            Configure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings