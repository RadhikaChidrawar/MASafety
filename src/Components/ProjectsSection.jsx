import { useState } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
// import project9 from "../assets/project9.jpg";

export default function ProjectsSection() {
  const categories = ["ALL", "HOUSEHOLD", "ORGANIZATION", "RESEARCH", "SCHOOL", "SAFETY WEAR PANEL"];

  const allProjects = [
    { id: 1, image: project1, category: "HOUSEHOLD" },
    { id: 2, image: project2, category: "ORGANIZATION" },
    { id: 3, image: project3, category: "RESEARCH" },
    { id: 4, image: project4, category: "SCHOOL" },
    { id: 5, image: project5, category: "SAFETY WEAR PANEL" },
    { id: 6, image: project6, category: "HOUSEHOLD" },
    { id: 7, image: project7, category: "ORGANIZATION" },
    { id: 8, image: project8, category: "RESEARCH" },
    // { id: 9, image: project9, category: "SCHOOL" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800">
        OUR INCREDIBLE PROJECTS
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-semibold transition-all duration-200 ${
              selectedCategory === category
                ? "bg-orange-500 text-white rounded-md"
                : "text-gray-700 hover:text-orange-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="flex justify-center items-center my-6">
        <span className="w-20 h-px bg-gray-300"></span>
        <span className="mx-2 text-orange-500 text-xl">⚡</span>
        <span className="w-20 h-px bg-gray-300"></span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full h-72 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No projects available
          </p>
        )}
      </div>
    </section>
  );
}
