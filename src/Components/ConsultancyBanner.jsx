import { Hand } from "lucide-react";

export default function ConsultancyBanner() {
  return (
    <section className="bg-[#1D2A4D] py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Icon + Text */}
        <div className="flex items-center text-center md:text-left">
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-orange-500 text-2xl">
            ⚡
          </div>
          <h2 className="text-white text-lg md:text-xl font-semibold ml-3">
            Get Free Consultancy About Your Project
          </h2>
        </div>

        {/* Right Button */}
        <button className="bg-orange-500 text-white font-medium px-6 py-2 rounded-md flex items-center gap-2 
                           hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
          <Hand size={20} />
          Ask a Question
        </button>
      </div>
    </section>
  );
}
