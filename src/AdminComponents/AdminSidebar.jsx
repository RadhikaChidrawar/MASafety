import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiPackage,
  FiUsers,
  FiSettings,
  FiMenu,
  FiFileText,
  FiClipboard,
  FiBox,
  FiLogOut,
} from "react-icons/fi";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user role from localStorage with a fallback
    const storedRole = localStorage.getItem("userRole") || "accountAdmin";
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuItems = {
    accountAdmin: [
      { name: "Dashboard", path: "/admin/account", icon: <FiHome /> },
      { name: "Users", path: "/admin/account/users", icon: <FiUsers /> },
      { name: "Reports", path: "/admin/account/reports", icon: <FiFileText /> },
      { name: "Profile", path: "/admin/account/profile", icon: <FiSettings /> },
    ],
    orderAdmin: [
      { name: "Dashboard", path: "/admin/order", icon: <FiHome /> },
      { name: "Product List", path: "/admin/order/product-list", icon: <FiPackage /> },
      { name: "Orders", path: "/admin/order/orders", icon: <FiClipboard /> },
      { name: "Inventory", path: "/admin/order/inventory", icon: <FiBox /> },
      { name: "Customers", path: "/admin/order/customers", icon: <FiUsers /> },
    ],
  };

  // Determine which menu to display based on user role
  const menus = menuItems[role] || menuItems.accountAdmin;

  return (
    <div
      className={`bg-gray-800 text-white min-h-screen flex flex-col justify-between ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300`}
    >
      <div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-4 w-full flex justify-start hover:bg-gray-700"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          <FiMenu size={24} />
        </button>
        <nav className="mt-4 space-y-2">
          {menus.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-all duration-200"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <span className={`${isOpen ? "block" : "hidden"} truncate`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mb-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 w-full hover:bg-red-600 transition-all duration-200"
        >
          <div className="flex-shrink-0"><FiLogOut /></div>
          <span className={`${isOpen ? "block" : "hidden"} truncate`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;