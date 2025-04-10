import React from 'react';
import { motion } from 'framer-motion';
import FireSafety from "../assets/FireSafety.jpg";
import FirstAid from "../assets/FirstAid.jpg";
import SecuritySystems from "../assets/SecuritySystems.jpg";

const servicesData = [
  {
    title: 'Fire Safety',
    description: 'Ensure your workplace is protected with advanced fire safety equipment and protocols.',
    image: FireSafety,
  },
  {
    title: 'First Aid Training',
    description: 'Learn life-saving skills with our professional first aid training programs.',
    image: FirstAid,
  },
  {
    title: 'Security Systems',
    description: 'Protect your premises with the latest security system technology.',
    image: SecuritySystems,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#1D2A4D] mb-12">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 sm:h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
