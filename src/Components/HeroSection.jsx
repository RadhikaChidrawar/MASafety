import { FaBolt, FaCompass } from "react-icons/fa";
import hero from "../assets/hero.mp4";
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

export default function HeroSection() {
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] text-white flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover  "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6 sm:px-6">
        {/* Top Banner */}
        <div className="bg-orange-500 text-white text-sm sm:text-sm font-bold px-3 sm:px-4 py-2 uppercase rounded-md inline-block">
          Clean & Safe Wear, The Safety Wear
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
          Safety wear, clean safe for better tomorrow
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg opacity-90 sm:text-base md:text-lg">
          Stay protected with top-quality safety gear. Whether at work or home,
          ensure a secure and risk-free environment. Choose the best safety
          equipment for a safer tomorrow.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center space-x-4">
          <button
            className="bg-red-600 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-lg sm:text-lg shadow-lg 
                        hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            <FaCompass /> Discover Now
          </button>
          <button
            className="bg-orange-500 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base sm:text-lg shadow-lg 
                        hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            < FlagCircleIcon /> Go Safe
          </button>
        </div>
      </div>
    </section>
  );   
}
