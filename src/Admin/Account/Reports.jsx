import { useState } from "react";
import sampleData from "../../assets/mockData"; // Update import path

const Reports = () => {
  const totalRevenue = sampleData.reduce((sum, product) => sum + product.product_price, 0);
  const avgRating = (sampleData.reduce((sum, product) => sum + product.product_star, 0) / sampleData.length).toFixed(1);
  
  const topPremiumProducts = [...sampleData]
    .sort((a, b) => b.product_price - a.product_price)
    .slice(0, 3);


  const safetyCategories = {
    "Head Protection": sampleData.filter(p => 
      p.product_name.includes("Helmet") || 
      p.product_name.includes("Goggles")
    ).length,
    "Body Protection": sampleData.filter(p => 
      p.product_name.includes("Vest") || 
      p.product_name.includes("Coveralls") ||
      p.product_name.includes("Harness")
    ).length,
    "Fire Safety": sampleData.filter(p => 
      p.product_name.includes("Fire") || 
      p.product_name.includes("Extinguisher")
    ).length,
    "Electrical Safety": sampleData.filter(p => 
      p.product_name.includes("Electrical") || 
      p.product_name.includes("Voltage")
    ).length
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Safety Products Analytics</h1>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-gray-500">Total Products</h3>
          <p className="text-2xl font-bold">{sampleData.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-gray-500">Inventory Value</h3>
          <p className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="text-gray-500">Avg. Product Rating</h3>
          <p className="text-2xl font-bold">{avgRating} ★</p>
        </div>
      </div>

      {/* Premium Products Gallery */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
        <h3 className="font-semibold mb-3">High-Value Safety Gear</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topPremiumProducts.map((product) => (
            <div key={product.product_id} className="border rounded-lg p-3 hover:bg-gray-50">
              <img 
                src={product.product_image} 
                alt={product.product_name} 
                className="w-full h-32 object-contain mb-2"
              />
              <h4 className="font-medium">{product.product_name}</h4>
              <p className="text-gray-600">₹{product.product_price.toLocaleString()}</p>
              <p className="text-sm text-yellow-500">{product.product_star} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Category Breakdown */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
        <h3 className="font-semibold mb-3">Protection Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(safetyCategories).map(([category, count]) => (
            <div key={category} className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium">{category}</h4>
              <p className="text-xl">{count} products</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full Product List */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h3 className="font-semibold mb-3">All Safety Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Price</th>
                <th className="text-left p-2">Rating</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((product) => (
                <tr key={product.product_id} className="border-b hover:bg-gray-50">
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src={product.product_image} 
                        alt={product.product_name} 
                        className="w-10 h-10 object-contain"
                      />
                      {product.product_name}
                    </div>
                  </td>
                  <td className="p-2">₹{product.product_price.toLocaleString()}</td>
                  <td className="p-2">
                    <span className="text-yellow-500">{product.product_star} ★</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports