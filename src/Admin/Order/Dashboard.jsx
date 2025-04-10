import { useState, useEffect } from 'react';
import { FiPackage, FiDollarSign, FiUsers, FiAlertTriangle } from 'react-icons/fi';

const Dashboard = () => {
  // Mock data - replace with real API calls
  const [orders, setOrders] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    lowStockItems: 0
  });

  useEffect(() => {
    // Simulate API fetch
    const fetchData = () => {
      // Mock orders data
      const mockOrders = [
        { id: 1001, customer: 'Construction Co.', items: 5, amount: 12500, status: 'Pending', date: '2023-06-15' },
        { id: 1002, customer: 'Factory Ltd.', items: 3, amount: 8400, status: 'Shipped', date: '2023-06-14' },
        { id: 1003, customer: 'Safety First Inc.', items: 8, amount: 21500, status: 'Completed', date: '2023-06-12' },
        { id: 1004, customer: 'Builders Corp.', items: 2, amount: 5600, status: 'Pending', date: '2023-06-10' }
      ];

      // Mock inventory data
      const mockInventory = [
        { id: 1, name: 'Safety Helmet', stock: 42, threshold: 20 },
        { id: 2, name: 'Safety Goggles', stock: 15, threshold: 25 }, // Low stock
        { id: 3, name: 'Fire Extinguisher', stock: 38, threshold: 15 },
        { id: 4, name: 'Steel Toe Boots', stock: 8, threshold: 10 }  // Low stock
      ];

      // Calculate stats
      setStats({
        totalOrders: mockOrders.length,
        pendingOrders: mockOrders.filter(o => o.status === 'Pending').length,
        completedOrders: mockOrders.filter(o => o.status === 'Completed').length,
        lowStockItems: mockInventory.filter(i => i.stock < i.threshold).length
      });

      setOrders(mockOrders);
      setInventory(mockInventory);
    };

    fetchData();
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Order Administration Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard 
          icon={<FiPackage className="text-blue-500" size={24} />} 
          title="Total Orders" 
          value={stats.totalOrders} 
          bgColor="bg-blue-50"
        />
        <StatCard 
          icon={<FiAlertTriangle className="text-yellow-500" size={24} />} 
          title="Pending Orders" 
          value={stats.pendingOrders} 
          bgColor="bg-yellow-50"
        />
        <StatCard 
          icon={<FiDollarSign className="text-green-500" size={24} />} 
          title="Completed Orders" 
          value={stats.completedOrders} 
          bgColor="bg-green-50"
        />
        <StatCard 
          icon={<FiUsers className="text-red-500" size={24} />} 
          title="Low Stock Items" 
          value={stats.lowStockItems} 
          bgColor="bg-red-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Order ID</th>
                  <th className="text-left p-2">Customer</th>
                  <th className="text-left p-2">Amount</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">#{order.id}</td>
                    <td className="p-2">{order.customer}</td>
                    <td className="p-2">₹{order.amount.toLocaleString()}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-2">
                      <select 
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className="text-xs border rounded p-1 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inventory Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Inventory Status</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Manage Inventory
            </button>
          </div>
          <div className="space-y-4">
            {inventory.map(item => (
              <div key={item.id} className="border-b pb-3 last:border-0">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.name}</span>
                  <span className={`font-semibold ${
                    item.stock < item.threshold ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {item.stock} in stock
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.stock < item.threshold ? 'bg-red-500' : 'bg-green-500'
                    }`} 
                    style={{ width: `${Math.min(100, (item.stock / (item.threshold * 2)) * 100)}%` }}
                  ></div>
                </div>
                {item.stock < item.threshold && (
                  <p className="text-xs text-red-500 mt-1">Low stock - Reorder needed</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ icon, title, value, bgColor }) => (
  <div className={`${bgColor} p-4 rounded-lg shadow-sm`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="p-2 rounded-full bg-white">
        {icon}
      </div>
    </div>
  </div>
);


export default Dashboard