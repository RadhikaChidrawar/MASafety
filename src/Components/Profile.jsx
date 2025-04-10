import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <label className="block mb-2 font-medium">Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label className="block mb-2 font-medium">Phone</label>
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label className="block mb-2 font-medium">Password</label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
