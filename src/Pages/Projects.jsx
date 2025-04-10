import React from "react";
import ourproject1 from "../assets/ourproject1.jpg";
import ourproject2 from "../assets/ourproject2.jpg";
import ourproject3 from "../assets/ourproject3.jpg";
import ourproject4 from "../assets/ourproject4.jpg";
import ourproject5 from "../assets/ourproject5.jpg";
import roi from "../assets/roi.png";

const Projects = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2A4D]">
          Our Projects
        </h2>
        <p className="text-gray-500 italic mt-2">
          A Glimpse into Our Digital Mastery
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
        {[
          { src: ourproject1, value: "10Y", label: "Years of Experience" },
          { src: ourproject4, value: "500", label: "Campaigns Launched" },
          { src: ourproject5, value: "200", label: "Satisfied Clients" },
          { src: roi, value: "30%", label: "Average Increase in ROI" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative shadow-lg rounded-lg overflow-hidden w-full h-60 sm:h-72"
          >
            <img
              src={item.src}
              alt="Stat Icon"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-2">
              <span className="text-3xl sm:text-4xl font-bold">{item.value}</span>
              <p className="text-lg sm:text-xl mt-1">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Project Showcase */}
      <div className="flex flex-col md:flex-row justify-center mt-12 bg-white shadow-lg p-6 md:p-10 max-w-5xl mx-auto rounded-xl">
        <img
          src={ourproject5}
          alt="Project Showcase"
          className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-6 md:mb-0"
        />
        <div className="md:ml-8 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2A4D]">
            Embark on a visual journey through our project showcase.
          </h3>
          <p className="text-gray-600 mt-3">
            Experience our impressive portfolio, highlighting creativity,
            strategy, and success in every project.
          </p>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg w-fit">
            Discover Projects
          </button>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="text-center mt-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#1D2A4D]">
          Explore Our Diverse Portfolio
        </h3>
        <p className="text-gray-500 mt-1">
          That Spans Across Industries And Scales.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        {[
          { src: ourproject1, title: "Strategy And Planning" },
          { src: ourproject2, title: "Creative Design" },
          { src: ourproject3, title: "Marketing & Branding" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-center font-bold text-lg text-[#1D2A4D]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
