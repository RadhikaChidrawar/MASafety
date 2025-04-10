import React from "react";
import { FaStar } from "react-icons/fa6";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(addToCart(product));

    toast.success("Product added to cart!!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg border relative transform transition-transform duration-300 hover:scale-105 w-full max-w-xs mx-auto">
      <img
        src={product.product_image}
        alt={product.product_name}
        className="w-full h-44 sm:h-48 object-contain mb-4"
      />

      <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
        {product.product_name}
      </h2>

      <p className="text-sm text-gray-600 mb-1">
        {product.product_Description}
      </p>

      <div className="flex items-center mb-1 text-orange-500">
        {Array(Number.isInteger(product.product_star)&& product.product_star > 0 ? product.product_star : 0)
          .fill()
          .map((_, index) => (
            <FaStar key={index} size={16} />
          ))}
      </div>

      <p className="text-gray-800 font-bold mb-2">₹{product.product_price}</p>

      {/* Add to Cart Button */}
      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-orange-600 group text-white text-sm rounded-full hover:w-28 sm:hover:w-32 hover:bg-orange-700 transition-all cursor-pointer"
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block text-xs sm:text-sm">
          Add to cart
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
