import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaCamera } from 'react-icons/fa'

const Profile = () => {
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white"
              />
              
              <button className="absolute bottom-0 right-0 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FaCamera className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-20 px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaUser className="text-gray-400 w-5 h-5" />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-gray-400 w-5 h-5" />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="text-gray-400 w-5 h-5" />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-gray-400 w-5 h-5" />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600">Location</label>
                    <input
                      type="text"
                      className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaBriefcase className="text-gray-400 w-5 h-5" />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600">Profession</label>
                    <input
                      type="text"
                      className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your profession"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-sm text-gray-600">Bio</label>
                  <textarea
                    className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                    placeholder="Tell us about yourself"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile