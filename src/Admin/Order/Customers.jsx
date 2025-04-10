import React from "react";
import { mockCustomers } from "../../assets/mockData";

const Customers = () => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Customers</h2>

      <div className="overflow-x-auto">
        {/* Mobile View (Cards) */}
        <div className="sm:hidden space-y-4">
          {mockCustomers.map((customer, index) => (
            <div 
              key={customer.id || index}
              className="bg-gray-900 text-white rounded-lg shadow p-4 border border-gray-700"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold">{customer.name}</h3>
                <span className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs">
                  View Orders
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="truncate">{customer.email}</p>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>{customer.phone}</p>
                </div>
                <div>
                  <p className="text-gray-400">Orders</p>
                  <p>{customer.totalOrders}</p>
                </div>
                <div>
                  <p className="text-gray-400">Joined</p>
                  <p>{customer.joinedDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (Table) */}
        <table className="hidden sm:table min-w-full bg-gray-900 text-white rounded-lg shadow">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="p-3 text-sm">Name</th>
              <th className="p-3 text-sm">Email</th>
              <th className="p-3 text-sm hidden md:table-cell">Phone</th>
              <th className="p-3 text-sm">Orders</th>
              <th className="p-3 text-sm hidden lg:table-cell">Joined</th>
              <th className="p-3 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer, index) => (
              <tr
                key={customer.id || index}
                className="border-b border-gray-800 hover:bg-gray-800"
              >
                <td className="p-3 text-sm">{customer.name}</td>
                <td className="p-3 text-sm">{customer.email}</td>
                <td className="p-3 text-sm hidden md:table-cell">{customer.phone}</td>
                <td className="p-3 text-sm">{customer.totalOrders}</td>
                <td className="p-3 text-sm hidden lg:table-cell">{customer.joinedDate}</td>
                <td className="p-3 text-sm">
                  <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs sm:text-sm">
                    View Orders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-black">
        <div className="text-xs sm:text-sm text-gray-900">
          Showing {mockCustomers.length} customers
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-600 rounded text-xs sm:text-sm hover:bg-gray-800 hover:text-white">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-600 rounded text-xs sm:text-sm hover:bg-gray-800 hover:text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;