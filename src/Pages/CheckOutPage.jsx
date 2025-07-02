// import React, { useState } from 'react';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css';

// function CheckoutPage() {
//     const [billingToggle, setBillingToggle] = useState(true);
//     const [shippingToggle, setShippingToggle] = useState(false);
//     const [paymentToggle, setPaymentToggle] = useState(false);
//     const [paymentMethod, setPaymentMethod] = useState("cod");

//     const cart = useSelector(state => state.cart);

//     const handlePlaceOrder = () => {
//         toast.success("Order placed successfully!", {
//             position: "top-right",
//             autoClose: 3000,
//         });
//     };

//     return (
//         <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-16 min-h-screen">
//             <ToastContainer />
//             <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">CHECKOUT PAGE</h3>
//             <div className="flex flex-col lg:flex-row gap-8">
                
//                 {/* Left Side: Forms */}
//                 <div className="w-full lg:w-2/3 space-y-6">
//                     {/* Billing */}
//                     <div className="border p-4 rounded-md">
//                         <div className="flex justify-between items-center cursor-pointer" onClick={() => setBillingToggle(!billingToggle)}>
//                             <h3 className="text-lg font-semibold">Billing Information</h3>
//                             {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
//                         </div>
//                         <div className={`mt-4 space-y-4 ${billingToggle ? "" : "hidden"}`}>
//                             <InputField label="Name" name="name" placeholder="Enter name" required/>
//                             <InputField label="Email" name="email" type="email" placeholder="Enter email"  required/>
//                             <InputField label="Phone No" name="phone" placeholder="Enter phone number" required />
//                         </div>
//                     </div>

//                     {/* Shipping */}
//                     <div className="border p-4 rounded-md">
//                         <div className="flex justify-between items-center cursor-pointer" onClick={() => setShippingToggle(!shippingToggle)}>
//                             <h3 className="text-lg font-semibold">Shipping Information</h3>
//                             {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
//                         </div>
//                         <div className={`mt-4 space-y-4 ${shippingToggle ? "" : "hidden"}`}>
//                             <InputField label="Address" name="address" placeholder="Enter address"required />
//                             <InputField label="City" name="city" placeholder="Enter city" required />
//                             <InputField label="Pin Code" name="pincode" placeholder="Enter pin code" required />
//                         </div>
//                     </div>

//                     {/* Payment */}
//                     <div className="border p-4 rounded-md">
//                         <div className="flex justify-between items-center cursor-pointer" onClick={() => setPaymentToggle(!paymentToggle)}>
//                             <h3 className="text-lg font-semibold">Payment Method</h3>
//                             {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
//                         </div>
//                         <div className={`mt-4 space-y-4 ${paymentToggle ? "" : "hidden"}`}>
//                             <div className="flex items-center gap-2">
//                                 <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
//                                 <label>Cash on Delivery</label>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <input type="radio" name="payment" checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
//                                 <label>Credit Card</label>
//                             </div>
//                             {paymentMethod === "dc" && (
//                                 <div className="space-y-4">
//                                     <InputField label="Card Number" placeholder="Enter card number" required />
//                                     <InputField label="Holder Name" placeholder="Enter cardholder name" required/>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                         <InputField label="Expiry Date" placeholder="MM/YY" required />
//                                         <InputField label="CVV" placeholder="Enter CVV" required/>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Side: Summary */}
//                 <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md border h-fit">
//                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                     <div className="space-y-4">
//                         {cart.products.map((product) => (
//                             <div key={product.product_id} className="flex items-center justify-between border-b pb-2 gap-4">
//                                 <img src={product.product_image} alt={product.product_name} className="w-16 h-16 object-cover rounded" />
//                                 <div className="flex-1">
//                                     <h4 className="text-md font-semibold">{product.product_name}</h4>
//                                     <p className="text-sm text-gray-600">₹{product.product_price} x {product.quantity}</p>
//                                 </div>
//                                 <span className="font-bold">₹{(product.product_price * product.quantity).toFixed(2)}</span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="flex justify-between mt-4 font-semibold">
//                         <span>Total Price:</span>
//                         <span>₹{cart.totalPrice.toFixed(2)}</span>
//                     </div>
//                     <button
//                         className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
//                         onClick={handlePlaceOrder}
//                     >
//                         Place Order
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Reusable Input Component
// const InputField = ({ label, name, placeholder, type = "text" }) => (
//     <div>
//         <label className="block text-gray-700 mb-1">{label}</label>
//         <input
//             type={type}
//             name={name}
//             placeholder={placeholder}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             required
//         />
//     </div>
// );

// export default CheckoutPage;



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

    const [billingInfo, setBillingInfo] = useState({ name: '', email: '', phone: '' });
    const [shippingInfo, setShippingInfo] = useState({ address: '', city: '', pincode: '' });
    const [cardInfo, setCardInfo] = useState({ cardNumber: '', holderName: '', expiry: '', cvv: '' });

    const cart = useSelector(state => state.cart);

    const handlePlaceOrder = () => {
        // Check required fields
        if (
            !billingInfo.name || !billingInfo.email || !billingInfo.phone ||
            !shippingInfo.address || !shippingInfo.city || !shippingInfo.pincode ||
            (paymentMethod === "dc" && (!cardInfo.cardNumber || !cardInfo.holderName || !cardInfo.expiry || !cardInfo.cvv))
        ) {
            toast.error("Please fill all required fields!", { position: "top-right", autoClose: 3000 });
            return;
        }

        toast.success("Order placed successfully!", {
            position: "top-right",
            autoClose: 3000,
            onClose: () => window.location.reload(), // Refresh after toast
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
                            <InputField label="Name" name="name" placeholder="Enter name"
                                value={billingInfo.name}
                                onChange={e => setBillingInfo({ ...billingInfo, name: e.target.value })}
                                required
                            />
                            <InputField label="Email" name="email" type="email" placeholder="Enter email"
                                value={billingInfo.email}
                                onChange={e => setBillingInfo({ ...billingInfo, email: e.target.value })}
                                required
                            />
                            <InputField label="Phone No" name="phone" placeholder="Enter phone number"
                                value={billingInfo.phone}
                                onChange={e => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Shipping */}
                    <div className="border p-4 rounded-md">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className="text-lg font-semibold">Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`mt-4 space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <InputField label="Address" name="address" placeholder="Enter address"
                                value={shippingInfo.address}
                                onChange={e => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                                required
                            />
                            <InputField label="City" name="city" placeholder="Enter city"
                                value={shippingInfo.city}
                                onChange={e => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                required
                            />
                            <InputField label="Pin Code" name="pincode" placeholder="Enter pin code"
                                value={shippingInfo.pincode}
                                onChange={e => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                                required
                            />
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
                                    <InputField label="Card Number" placeholder="Enter card number"
                                        value={cardInfo.cardNumber}
                                        onChange={e => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                                        required
                                    />
                                    <InputField label="Holder Name" placeholder="Enter cardholder name"
                                        value={cardInfo.holderName}
                                        onChange={e => setCardInfo({ ...cardInfo, holderName: e.target.value })}
                                        required
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <InputField label="Expiry Date" placeholder="MM/YY"
                                            value={cardInfo.expiry}
                                            onChange={e => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                                            required
                                        />
                                        <InputField label="CVV" placeholder="Enter CVV"
                                            value={cardInfo.cvv}
                                            onChange={e => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                                            required
                                        />
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
const InputField = ({ label, name, placeholder, type = "text", value, onChange }) => (
    <div>
        <label className="block text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
        />
    </div>
);

export default CheckoutPage;
