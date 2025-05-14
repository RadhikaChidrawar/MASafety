// import { useState } from "react";
// // import project1 from "../assets/project1.jpg";
// // import project2 from "../assets/project2.jpg";
// // import project3 from "../assets/project3.jpg";
// // import project4 from "../assets/project4.jpg";
// // import project5 from "../assets/project5.jpg";
// // import project6 from "../assets/project6.jpg";
// // import project7 from "../assets/project7.jpg";
// // import project8 from "../assets/project8.jpg";
// // // import project9 from "../assets/project9.jpg";


// import denimShirt from '../assets/mockData'
// import resto from '../assets/mockData'
// import health from '../assets/mockData'
// import school from '../assets/mockData'
// import security from '../assets/mockData'
// import corp from '@mui/icons-material/HealthAndSafety';

// export default function ProjectsSection() {
//   const categories = ["ALL", "DENIM SHIRT", "RESTAURANTS", "HEALTH CARE", "SCHOOL", "SECURITY", "CORPORAT"];

//   const allProjects = [
//     { id: 1, image: project1, category: "DENIM SHIRT" },
//     { id: 2, image: project2, category: "RESTAURANTS" },
//     { id: 3, image: project3, category: "HEALTH CARE" },
//     { id: 4, image: project4, category: "SCHOOL" },
//     { id: 5, image: project5, category: "SECURITY" },
//     { id: 6, image: project6, category: "CORPORAT" },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("ALL");

//   const filteredProjects =
//     selectedCategory === "ALL"
//       ? allProjects
//       : allProjects.filter((project) => project.category === selectedCategory);

//   return (
//     <section className="px-4 py-10 max-w-7xl mx-auto">
//       {/* Title */}
//       <h2 className="text-3xl font-bold text-center text-gray-800">
//         OUR INCREDIBLE PROJECTS
//       </h2>

//       {/* Category Filter */}
//       <div className="flex flex-wrap justify-center gap-4 mt-6">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 font-semibold transition-all duration-200 ${
//               selectedCategory === category
//                 ? "bg-orange-500 text-white rounded-md"
//                 : "text-gray-700 hover:text-orange-500"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Divider */}
//       <div className="flex justify-center items-center my-6">
//         <span className="w-80 h-px bg-gray-300"></span>
//         <span className="mx-2 text-orange-500 text-xl"><HealthAndSafetyIcon fontSize="large"/></span>
//         <span className="w-80 h-px bg-gray-300"></span>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="w-full h-72 overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={project.image}
//                 alt={`Project ${project.id}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full text-center">
//             No projects available
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }






// import { useState } from "react";
// import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

// // Import your mock data
// import { 
//   denimShirt,
//   resto,
//   health,
//   school,
//   security,
//   corp as corporateData,
//   normal
// } from '../assets/mockData';

// export default function ProjectsSection() {
//   const categories = ["ALL", "DENIM SHIRT", "RESTAURANTS", "HEALTH CARE", "SCHOOL", "SECURITY", "CORPORAT"];

//   // Combine all projects data
//   const allProjects = [
//     ...denimShirt.map(item => ({ ...item, category: "DENIM SHIRT" })),
//     ...resto.map(item => ({ ...item, category: "RESTAURANTS" })),
//     ...health.map(item => ({ ...item, category: "HEALTH CARE" })),
//     ...school.map(item => ({ ...item, category: "SCHOOL" })),
//     ...security.map(item => ({ ...item, category: "SECURITY" })),
//     ...corporateData.map(item => ({ ...item, category: "CORPORAT" })),
//     ...normal.map(item => ({ ...item, category: "ALL" }))
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("ALL");

//   const filteredProjects =
//     selectedCategory === "ALL"
//       ? allProjects
//       : allProjects.filter((project) => project.category === selectedCategory);

//   return (
//     <section className="px-4 py-10 max-w-7xl mx-auto">
//       {/* Title */}
//       <h2 className="text-3xl font-bold text-center text-gray-800">
//         OUR INCREDIBLE PROJECTS
//       </h2>

//       {/* Category Filter */}
//       <div className="flex flex-wrap justify-center gap-4 mt-6">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 font-semibold transition-all duration-200 ${
//               selectedCategory === category
//                 ? "bg-orange-500 text-white rounded-md"
//                 : "text-gray-700 hover:text-orange-500"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Divider */}
//       <div className="flex justify-center items-center my-6">
//         <span className="w-80 h-px bg-gray-300"></span>
//         <span className="mx-2 text-orange-500 text-xl">
//           <HealthAndSafetyIcon fontSize="large"/>
//         </span>
//         <span className="w-80 h-px bg-gray-300"></span>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((project) => (
//             <div
//               key={project.product_id}
//               className="w-full h-72 overflow-hidden rounded-lg shadow-lg relative group"
//             >
//               <img
//                 src={project.product_image}
//                 alt={project.product_name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
//                 <h3 className="text-white font-bold text-lg">{project.product_name}</h3>
//                 <p className="text-gray-200 text-sm">{project.product_Description}</p>
//                 <p className="text-orange-400 font-semibold mt-2">₹{project.product_price}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-full text-center">
//             No projects available in this category
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { motion } from "framer-motion";
import { 
  denimShirt,
  resto,
  health,
  school,
  security,
  corp as corporateData,
  normal
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
  const categories = ["ALL", "DENIM SHIRT", "RESTAURANTS", "HEALTH CARE", "SCHOOL", "SECURITY", "CORPORAT"];
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Combine all projects data
  const allProjects = [
    ...denimShirt.map(item => ({ ...item, category: "DENIM SHIRT" })),
    ...resto.map(item => ({ ...item, category: "RESTAURANTS" })),
    ...health.map(item => ({ ...item, category: "HEALTH CARE" })),
    ...school.map(item => ({ ...item, category: "SCHOOL" })),
    ...security.map(item => ({ ...item, category: "SECURITY" })),
    ...corporateData.map(item => ({ ...item, category: "CORPORAT" })),
    ...normal.map(item => ({ ...item, category: "ALL" }))
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
                    <span className="text-orange-400 font-bold text-lg">₹{project.product_price}</span>
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