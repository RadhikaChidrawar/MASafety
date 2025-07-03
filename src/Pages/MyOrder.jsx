// import React from "react";
// import { FaBox, FaTruck, FaCheckCircle, FaSpinner } from "react-icons/fa";

// const orders = [
//   {
//     id: "ORD123456",
//     date: "2025-07-01",
//     total: 899,
//     status: "Shipped",
//     items: [
//       {
//         name: "Wireless Earbuds",
//         image: "https://via.placeholder.com/60",
//         qty: 1,
//         price: 899,
//       },
//     ],
//   },
//   {
//     id: "ORD987654",
//     date: "2025-06-21",
//     total: 1299,
//     status: "Delivered",
//     items: [
//       {
//         name: "Bluetooth Speaker",
//         image: "https://via.placeholder.com/60",
//         qty: 1,
//         price: 1299,
//       },
//     ],
//   },
// ];

// const statusIcon = {
//   Processing: <FaSpinner className="text-yellow-500 animate-spin" />,
//   Shipped: <FaTruck className="text-blue-500" />,
//   Delivered: <FaCheckCircle className="text-green-600" />,
// };

// const MyOrder = () => {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h2>
//       {orders.map((order) => (
//         <div
//           key={order.id}
//           className="bg-white rounded-xl shadow-md p-5 mb-6 border border-gray-200"
//         >
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <p className="text-sm text-gray-500">Order ID: {order.id}</p>
//               <p className="text-sm text-gray-500">Date: {order.date}</p>
//             </div>
//             <div className="flex items-center gap-2">
//               {statusIcon[order.status]}
//               <span
//                 className={`text-sm font-medium ${
//                   order.status === "Delivered"
//                     ? "text-green-600"
//                     : order.status === "Shipped"
//                     ? "text-blue-500"
//                     : "text-yellow-500"
//                 }`}
//               >
//                 {order.status}
//               </span>
//             </div>
//           </div>

//           <div className="divide-y">
//             {order.items.map((item, index) => (
//               <div key={index} className="flex items-center py-3 gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md border"
//                 />
//                 <div className="flex flex-col flex-grow">
//                   <p className="text-sm font-semibold text-gray-700">
//                     {item.name}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Quantity: {item.qty}
//                   </p>
//                 </div>
//                 <div className="text-sm font-semibold text-gray-800">
//                   ₹{item.price}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-right mt-4">
//             <span className="text-gray-600 text-sm">Total: </span>
//             <span className="font-semibold text-lg text-blue-800">
//               ₹{order.total}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyOrder;



import React from 'react'

function MyOrder() {
  return (
    <div>
      my Order
    </div>
  )
}

export default MyOrder
