import { useState } from "react";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { motion } from "framer-motion";
import { 
  helmetProducts,
  glovesProducts,
  goggleProducts,
  maskProducts,
  vestProducts,
} from '../assets/mockData';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsSection() {
  const categories = ["ALL", "HELMET", "GLOVES", "GOGGLE","MASK", "VEST"];
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Combine all projects data
  const allProjects = [
    ...helmetProducts.map(item => ({ ...item, category: "HELMET" })),
    ...glovesProducts.map(item => ({ ...item, category: "GLOVES" })),
    ...goggleProducts.map(item => ({ ...item, category: "GOGGLE" })),
    ...maskProducts.map(item => ({ ...item, category: "MASK" })),
    ...vestProducts.map(item => ({ ...item, category: "VEST" })),
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      {/* Title with decorative elements */}
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          <span className="relative z-10 px-4 bg-white">
            OUR INCREDIBLE PROJECTS
          </span>
          <span className="absolute h-1 w-full bg-gradient-to-r from-orange-400 to-orange-600 bottom-3 left-0 -z-0"></span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of projects across various industries and sectors.
        </p>
      </div>

      {/* Category Filter with active indicator */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-orange-500 text-white shadow-lg shadow-orange-100"
                : "text-gray-700 hover:text-orange-500 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            {category}
            {selectedCategory === category && (
              <motion.span 
                layoutId="categoryIndicator"
                className="absolute inset-0 border-2 border-orange-400 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid with animations */}
      {filteredProjects.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.product_id}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.product_image}
                  alt={project.product_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-orange-300 bg-black/30 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1 line-clamp-1">{project.product_name}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.product_Description}</p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-orange-400 font-bold text-lg">₹{project.product_price}</span> */}
                    <button className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-full text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <div className="text-gray-400 text-5xl mb-4">😕</div>
          <h3 className="text-xl font-medium text-gray-600 mb-2">No projects found</h3>
          <p className="text-gray-500">We couldn't find any projects in this category</p>
        </div>
      )}

      {/* Decorative divider */}
      <div className="mt-16 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
}