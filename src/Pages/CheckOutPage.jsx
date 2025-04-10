import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function CheckoutPage() {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const cart = useSelector(state => state.cart);

    const handlePlaceOrder = () => {
        toast.success("Order placed successfully!", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-16 min-h-screen">
            <ToastContainer />
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">CHECKOUT PAGE</h3>
            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Side: Forms */}
                <div className="w-full lg:w-2/3 space-y-6">
                    {/* Billing */}
                    <div className="border p-4 rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className="text-lg font-semibold">Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`mt-4 space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <InputField label="Name" name="name" placeholder="Enter name" />
                            <InputField label="Email" name="email" type="email" placeholder="Enter email" />
                            <InputField label="Phone No" name="phone" placeholder="Enter phone number" />
                        </div>
                    </div>

                    {/* Shipping */}
                    <div className="border p-4 rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className="text-lg font-semibold">Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`mt-4 space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <InputField label="Address" name="address" placeholder="Enter address" />
                            <InputField label="City" name="city" placeholder="Enter city" />
                            <InputField label="Pin Code" name="pincode" placeholder="Enter pin code" />
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="border p-4 rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className="text-lg font-semibold">Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`mt-4 space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                                <label>Cash on Delivery</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="payment" checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                                <label>Credit Card</label>
                            </div>
                            {paymentMethod === "dc" && (
                                <div className="space-y-4">
                                    <InputField label="Card Number" placeholder="Enter card number" />
                                    <InputField label="Holder Name" placeholder="Enter cardholder name" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputField label="Expiry Date" placeholder="MM/YY" />
                                        <InputField label="CVV" placeholder="Enter CVV" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side: Summary */}
                <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md border h-fit">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-4">
                        {cart.products.map((product) => (
                            <div key={product.product_id} className="flex items-center justify-between border-b pb-2 gap-4">
                                <img src={product.product_image} alt={product.product_name} className="w-16 h-16 object-cover rounded" />
                                <div className="flex-1">
                                    <h4 className="text-md font-semibold">{product.product_name}</h4>
                                    <p className="text-sm text-gray-600">₹{product.product_price} x {product.quantity}</p>
                                </div>
                                <span className="font-bold">₹{(product.product_price * product.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 font-semibold">
                        <span>Total Price:</span>
                        <span>₹{cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

// Reusable Input Component
const InputField = ({ label, name, placeholder, type = "text" }) => (
    <div>
        <label className="block text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
        />
    </div>
);

export default CheckoutPage;
