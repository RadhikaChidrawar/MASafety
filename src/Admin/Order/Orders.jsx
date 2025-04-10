import React from "react";
import sampleData from "../../assets/mockData"; 


const userOrders = [
  {
    orderId: "ORD1001",
    username: "Amit Sharma",
    status: "Pending",
    products: [sampleData[0], sampleData[3], sampleData[6]], 
  },
  {
    orderId: "ORD1002",
    username: "Priya Mehta",
    status: "Delivered",
    products: [sampleData[2], sampleData[5]], 
  },
  {
    orderId: "ORD1003",
    username: "Rahul Verma",
    status: "Shipped",
    products: [sampleData[18], sampleData[15], sampleData[19]], 
  },
];

const Orders = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Orders</h2>

      {userOrders.map((order) => (
        <div key={order.orderId} className="mb-8 border border-gray-700 rounded-lg p-4 bg-gray-900 text-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold">Order ID: <span className="text-green-400">{order.orderId}</span></p>
              <p>User: {order.username}</p>
            </div>
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                order.status === "Pending"
                  ? "bg-yellow-500 text-black"
                  : order.status === "Shipped"
                  ? "bg-blue-500"
                  : "bg-green-500"
              }`}
            >
              {order.status}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2">Image</th>
                  <th className="p-2">Product Name</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800">
                {order.products.map((product) => (
                  <tr key={product.product_id} className="border-t border-gray-700">
                    <td className="p-2">
                      <img src={product.product_image} alt={product.product_name} className="w-12 h-12 object-cover rounded" />
                    </td>
                    <td className="p-2">{product.product_name}</td>
                    <td className="p-2">₹{product.product_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Price */}
          <div className="mt-4 text-right font-semibold">
            Total: ₹{order.products.reduce((sum, prod) => sum + prod.product_price, 0)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
