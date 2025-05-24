import React from 'react';
import contactbackground from "../assets/contactbackground.jpg";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white px-4 py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.4), rgba(0, 0, 255, 0.4)), url(${contactbackground})`,
      }}
    >
      <div className="bg-gray-800 bg-opacity-80 p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out to us for any inquiries or assistance.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-orange-400">Address</h3>
              <p>Sr.No.41/3, 1st Floor, sindhu Govind Complex,Behind Shakun Tiles,Dattanagar, Pune - 411046</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400">Phone</h3>
              <p className="text-lg font-semibold text-white flex items-center gap-2"><LuPhoneCall  />+91 9922759640 || 91+9766091811 </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400">Email</h3>
              <p>masafety8@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white text-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Send Message
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Type your Message..."
              className="p-3 border border-gray-300 rounded h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
