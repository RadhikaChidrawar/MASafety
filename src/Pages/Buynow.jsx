import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import empty from "../assets/123safety.jpg";
import { FaTrashAlt } from "react-icons/fa";
import {
  decressQuentity,
  incressQuentity,
  removeFromCart,
  updateQuantity
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Buynow() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("xyz, 000");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4 min-h-96">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="hidden md:flex justify-between font-bold text-sm border-b py-2">
                <p className="w-2/5">Product</p>
                <div className="w-3/5 flex justify-between">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>

              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.product_id}
                    className="flex flex-col md:flex-row items-center justify-between py-4 border-b"
                  >
                    <div className="flex items-center space-x-4 w-full md:w-2/5 mb-4 md:mb-0">
                      <img
                        src={product.product_image}
                        alt={product.product_name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <h3 className="text-base font-medium">
                        {product.product_name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-3/5 gap-4 text-sm">
                      <p>₹{product.product_price}</p>

                      {/* <div className="flex items-center border rounded">
                        <button
                          className="px-2 font-bold border-r"
                          onClick={() =>
                            dispatch(decressQuentity(product.product_id))
                          }
                        >
                          -
                        </button>
                        <p className="px-3">{product.quantity}</p>
                        <button
                          className="px-2 border-l"
                          onClick={() =>
                            dispatch(incressQuentity(product.product_id))
                          }
                        >
                          +
                        </button>
                      </div> */}

                      {/* custom quentity */}
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantity({
                              product_id: product.product_id,
                              quantity: parseInt(e.target.value),
                            })
                          )
                        }
                        className="w-16 text-center border rounded px-2 py-1"
                      />

                      <p>
                        ₹{(product.quantity * product.product_price).toFixed(2)}
                      </p>

                      <button
                        className="text-orange-500 hover:text-orange-700"
                        onClick={() =>
                          dispatch(removeFromCart(product.product_id))
                        }
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>

              <div className="flex justify-between mb-4 border-b pb-2 text-sm">
                <span>Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2 text-sm">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to:
                  <span className="font-bold"> {address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline ml-2 mt-1"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change address
                </button>
              </div>

              <div className="flex justify-between text-base font-medium mb-4">
                <span>Total Price:</span>
                <span>₹{cart.totalPrice.toFixed(2)}</span>
              </div>

              <button
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={empty} alt="Empty cart" className="h-96 mb-6" />
          {/* <p className="text-lg font-medium mb-4">Your cart is empty!</p> */}
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            onClick={() => navigate("/shop")} // Change '/shop' to your actual shop route
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Buynow;
