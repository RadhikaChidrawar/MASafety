import { IoCall } from "react-icons/io5";
import bgImage from "../assets/footerbg.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 px-6 md:px-8 lg:px-12 bg-gray-800">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="w-full flex flex-row gap-4 md:gap-12 lg:gap-16">
          {/* Product Section */}
          <div className="w-1/2">
            <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-5 text-black border-b border-gray-300 pb-2">
              Product
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-900">
              <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                About Us
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                Contact Us
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                FAQs
              </li>  
            </ul>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4">
              <button className="px-4 md:px-6 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors duration-200 shadow-md">
                Buy Now
              </button>

              <button 
                className="flex items-center gap-2 px-4 md:px-6 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors duration-200 shadow-md"
              >
                <IoCall className="w-5 h-5" />
                 +91 9545261030 / +91 8922930360
              </button>
            </div>
          </div>

          {/* Your Account Section */}
          <div className="w-1/2">
            <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-5 text-black border-b border-gray-300 pb-2">
              Your Account
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-900">
              <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                Delivery
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                Search
              </li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Newsletter and Social Media */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="w-full md:w-1/2">
              <h4 className="font-bold text-gray-900 mb-2">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="w-full md:w-auto flex space-x-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-500 transition-colors duration-200">
                <span className="font-bold">f</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-500 transition-colors duration-200">
                <span className="font-bold">in</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-500 transition-colors duration-200">
                <span className="font-bold">X</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-500 transition-colors duration-200">
                <span className="font-bold">IG</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 md:mt-8 text-center text-white text-sm">
            <p>copy right @  SPCL infotech services pvt ltd, pune </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
