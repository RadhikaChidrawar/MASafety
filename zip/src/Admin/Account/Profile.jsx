import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Safety Admin",
    email: "admin@safetyproducts.com",
    company: "Safety Gear Inc.",
    phone: "+91 9876543210",
    address: "123 warje Area, pune, India",
    profileImage: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 py-6 px-4 sm:px-8 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl font-bold">My Profile</h1>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition"
              >
                Edit Profile
              </button>
            ) : (
              <div className="space-x-2">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-blue-100"
              />
              {isEditing && (
                <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Change Photo
                </button>
              )}
            </div>

            {/* Profile Details */}
            <div className="w-full md:w-2/3 space-y-4">
              {[
                { label: "Full Name", key: "name", type: "text" },
                { label: "Email", key: "email", type: "email" },
                { label: "Company", key: "company", type: "text" },
                { label: "Phone", key: "phone", type: "tel" },
              ].map(({ label, key, type }) => (
                <div key={key}>
                  <label className="block text-gray-600 mb-1">{label}</label>
                  {isEditing ? (
                    <input
                      type={type}
                      name={key}
                      value={user[key]}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-lg">{user[key]}</p>
                  )}
                </div>
              ))}

              {/* Address separately handled */}
              <div>
                <label className="block text-gray-600 mb-1">Address</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-lg">{user.address}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
