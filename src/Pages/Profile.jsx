import React, { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profilePic: "",
    address: "",
  });

  const [editable, setEditable] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const data = JSON.parse(stored);
      setUser(data);
      setPreview(data.profilePic || "");
    }
  }, []);

  const handleChange = (e) => {
    if (!editable) return;
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (!editable) return;
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setUser({ ...user, profilePic: imageUrl });
    }
  };

  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditable(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer group">
            <img
              src={preview || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
            />
            {editable && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 text-white flex items-center justify-center text-xs rounded-full group-hover:opacity-100 transition-opacity">
                  Change
                </div>
              </>
            )}
          </label>

          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name || "Your Name"}
          </h2>
          <p className="text-sm text-gray-500 mb-6">{user.email}</p>
        </div>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              name="name"
              type="text"
              value={user.name}
              onChange={handleChange}
              readOnly={!editable}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none ${
                editable
                  ? "cursor-text bg-white border-blue-400"
                  : "cursor-default bg-gray-100"
              }`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              name="phone"
              type="text"
              value={user.phone}
              onChange={handleChange}
              readOnly={!editable}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none ${
                editable
                  ? "bg-white border-blue-400 cursor-text"
                  : "bg-gray-100 border-gray-300 cursor-default"
              }`}
            />
          </div>

          {/* Email - not editable */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-full mt-1 px-4 py-2 bg-gray-100 border rounded-lg cursor-not-allowed"
            />
          </div>

          {/* address */}
          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              name="address"
              type="text"
              value={user.address}
              onChange={handleChange}
              readOnly={!editable}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none ${
                editable
                  ? "bg-white border-blue-400 cursor-text"
                  : "bg-gray-100 border-gray-300 cursor-default"
              }`}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          {!editable ? (
            <button
              onClick={() => setEditable(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow"
            >
              Update
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
