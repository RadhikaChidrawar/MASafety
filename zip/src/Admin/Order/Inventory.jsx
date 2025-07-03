import React, { useState } from "react";
import sampleData from "../../assets/mockData";

const Inventory = () => {
  
  const [inventory, setInventory] = useState(
    sampleData.map((item) => ({
      ...item,
      inStock: true,
    }))
  );

  const toggleStockStatus = (id) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.product_id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Inventory</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventory.map((product) => (
          <div
            key={product.product_id}
            className="bg-gray-900 text-white border border-gray-700 rounded-lg p-4 shadow"
          >
            <img
              src={product.product_image}
              alt={product.product_name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{product.product_name}</h3>
            <p className="text-sm text-gray-300">{product.product_Description}</p>
            <p className="mt-2 font-medium">₹{product.product_price}</p>
            <p
              className={`mt-2 font-semibold ${
                product.inStock ? "text-green-400" : "text-red-500"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <button
              onClick={() => toggleStockStatus(product.product_id)}
              className="mt-3 px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-sm"
            >
              {product.inStock ? "Mark Out of Stock" : "Restock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
