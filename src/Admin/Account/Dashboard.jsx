import React, { useEffect, useState } from "react";
import { FiShoppingCart, FiDollarSign, FiUsers } from "react-icons/fi";

const Dashboard = () => {
  const [orders, setOrders] = useState(120);
  const [revenue, setRevenue] = useState(45000);
  const [users, setUsers] = useState(300);
  console.log("hey radha ");
  

  useEffect(() => {
    // Here you can fetch real data from your API
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
          <FiShoppingCart className="text-3xl text-blue-600" />
          <div>
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-gray-600">{orders}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
          <FiDollarSign className="text-3xl text-green-600" />
          <div>
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-gray-600">₹{revenue}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
          <FiUsers className="text-3xl text-purple-600" />
          <div>
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-gray-600">{users}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
