import { FaBolt } from "react-icons/fa";
import safetyImage from "../assets/safety.png";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 py-10 md:px-10 bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img src={safetyImage} alt="Safety Equipment" className="w-full h-auto" />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
          About Safety Wear
        </h2>

        {/* Decorative Icon & Line */}
        <div className="flex items-center justify-center md:justify-start mt-2">
          <div className="w-full max-w-[60px] h-[1px] bg-gray-300"></div>
          <FaBolt className="text-orange-500 mx-2" size={20} />
          <div className="w-full max-w-[60px] h-[1px] bg-gray-300"></div>
        </div>

        <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
          20 Years Of Experience
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
          We have been providing top-notch safety equipment for over two decades. 
          Our products ensure maximum protection and comfort, keeping industries safe and secure.
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded shadow-md hover:bg-orange-600 flex items-center justify-center mx-auto md:mx-0 space-x-2">
          <FaBolt />
          <span>Discover Now</span>
        </button>
      </div>
    </section>
  );
}
