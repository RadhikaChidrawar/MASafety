import React, { useState } from 'react';
import { FiTrash2, FiEdit, FiSearch, FiPlus, FiX } from 'react-icons/fi';

const Users = () => {
  // Sample user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', role: 'User' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', phone: '345-678-9012', role: 'User' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '456-789-0123', role: 'User' },
    { id: 5, name: 'Michael Wilson', email: 'michael@example.com', phone: '567-890-1234', role: 'User' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRow, setExpandedRow] = useState(null);

  const handleDelete = (userId) => {
    // Add your delete logic here
    console.log('Deleting user with ID:', userId);
    alert(`User with ID ${userId} will be deleted`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  const toggleRow = (userId) => {
    setExpandedRow(expandedRow === userId ? null : userId);
  };

  return (
    <div className="p-4 md:p-6">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">User Management</h1>
        <div className="relative w-full sm:w-auto">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="bg-white rounded-lg shadow overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user.role === 'Admin' ? 'bg-green-100 text-green-800' : 
                         user.role === 'Editor' ? 'bg-blue-100 text-blue-800' : 
                         'bg-gray-100 text-gray-800'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-orange-600 hover:text-orange-900 mr-3">
                      <FiEdit className="inline" />
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 className="inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {filteredUsers.length === 0 ? (
          <div className="bg-white p-4 rounded-lg shadow text-center text-gray-500">
            No users found
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow">
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleRow(user.id)}
              >
                <div>
                  <div className="font-medium text-gray-900">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
                <div className="flex items-center">
                  <span className={`px-2 mr-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.role === 'Admin' ? 'bg-green-100 text-green-800' : 
                      user.role === 'Editor' ? 'bg-blue-100 text-blue-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {user.role}
                  </span>
                  <button 
                    className="text-orange-600 hover:text-orange-900 mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Edit logic
                    }}
                  >
                    <FiEdit className="text-lg" />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(user.id);
                    }}
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </div>
              </div>
              
              {expandedRow === user.id && (
                <div className="px-4 pb-4 pt-2 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-500">ID:</div>
                    <div>{user.id}</div>
                    <div className="text-gray-500">Phone:</div>
                    <div>{user.phone}</div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-sm text-gray-500">
          Showing 1 to {filteredUsers.length} of {filteredUsers.length} entries
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <button className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </div>

      {/* Add New User Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <FiPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Users;