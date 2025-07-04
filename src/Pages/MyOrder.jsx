import React, { useEffect, useState } from "react";
import { FaBox, FaTruck, FaCheckCircle, FaSpinner } from "react-icons/fa";

const statusIcon = {
  Processing: <FaSpinner className="text-yellow-500 animate-spin" />,
  Shipped: <FaTruck className="text-blue-500" />,
  Delivered: <FaCheckCircle className="text-green-600" />,
};

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

  //   if (user) {
  //     const userOrders = allOrders.filter(
  //       (order) => order.userEmail === user.email
  //     );
  //     setOrders(userOrders);
  //   }
  // }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    if (user) {
      const userOrders = allOrders.filter(
        (order) => order.userEmail === user.email
      );

      // Simulate auto status update
      const updatedOrders = userOrders.map((order) => {
        if (order.status === "Processing") {
          return { ...order, status: "Shipped" }; // Simulate shipping after load
        }
        return order;
      });

      setOrders(updatedOrders);

      // Update localStorage
      const updatedAllOrders = allOrders.map((order) => {
        if (order.userEmail === user.email && order.status === "Processing") {
          return { ...order, status: "Shipped" };
        }
        return order;
      });
      localStorage.setItem("orders", JSON.stringify(updatedAllOrders));
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-sm">
          You have not placed any orders yet.
        </p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 mb-6 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">
                  Order ID: ORD{index + 1001}
                </p>
                <p className="text-sm text-gray-500">Date: {order.orderDate}</p>
              </div>
              <div className="flex items-center gap-2">
                {statusIcon[order.status]}
                <span
                  className={`text-sm font-medium ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Shipped"
                      ? "text-blue-500"
                      : "text-yellow-500"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>

            <div className="divide-y">
              {order.products.map((item, i) => (
                <div key={i} className="flex items-center py-3 gap-4">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div className="flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-gray-700">
                      {item.product_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    ₹{item.product_price}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right mt-4">
              <span className="text-gray-600 text-sm">Total: </span>
              <span className="font-semibold text-lg text-blue-800">
                ₹{order.totalPrice}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrder;
