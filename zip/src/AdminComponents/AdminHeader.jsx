import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "../assets/profile.jpeg";

const AdminHeader = ({ user }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userRole");

    navigate("/");
  };

  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">
        {role === "orderAdmin" ? "Order Admin Panel" : "Account Admin Panel"}
      </h1>

      {/* Right side: only show on medium and above screens */}
      <div className="hidden md:flex items-center gap-4">
        <span className="text-gray-700">{user?.name}</span>
        <img
          src={user?.image || image}
          alt="Profile"
          className="w-10 h-10 rounded-full border object-cover"
        />
        <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
          <FiLogOut size={20} />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
