import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedCards = () => {
  const [clickedIndex, setClickedIndex] = useState(null); // Track which card is clicked

  const cards = [
    { title: "COMMERCIAL EQUIPMENT", icon: "🔌" },
    { title: "INNOVATION & RESEARCH", icon: "⚡" },
    { title: "HOME APPLIANCE", icon: "🏠" },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 px-4 py-10">
      {cards.map((item, index) => (
        <motion.div
          key={index}
          className="w-full md:w-96 p-6 rounded-lg text-center text-white bg-blue-900 shadow-xl cursor-pointer"
          whileHover={{ scale: 1.05, backgroundColor: "#FF5733" }}
          transition={{ duration: 0.3 }}
          onClick={() =>
            setClickedIndex(clickedIndex === index ? null : index)
          }
        >
          <motion.div
            className="text-5xl mb-4"
            animate={clickedIndex === index ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {item.icon}
          </motion.div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-base mt-3">
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus.
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedCards;
