import React, { useState } from "react";
// import data from "../assets/mockData"; 
import ProductCart from "../Components/ProductCart";
import sampleData from "../assets/mockData"; 
import { denimShirt, corp, health, normal, resto, security, school } from "../assets/mockData";

// Combine product arrays
const allProduct = [...sampleData, ...denimShirt, ...corp, ...health, ...normal, ...resto, ...security, ...school];

function Shop() {
  const categories = ["All", ...new Set(allProduct.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProduct
      : allProduct.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products available</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
