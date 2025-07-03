import { motion } from "framer-motion";
import { useState } from "react";
import shoes from "../assets/sho11.png";
import uni from "../assets/uni.png";
import saf from "../assets/saf1.png";

const AnimatedCards = () => {
  const [clickedIndex, setClickedIndex] = useState(null); 

  const cards = [
    {
      title: "Safety Equipment",
      icon: saf,
      type: "image",
      des: "Stay protected on the job with our high-quality safety equipment. From helmets to gloves, we provide gear that ensures maximum safety and comfort in hazardous environments.",
    },
    {
      title: "Safety Shoes",
      icon: shoes,
      type: "image",
      des: "Step into safety with our durable and certified safety shoes. Designed to protect your feet from impact, punctures, and slips — ideal for industrial and construction use.",
    },
    {
      title: " Safety Uniforms",
      icon: uni,
      type: "image",
      des: "Professional and protective workwear tailored for all industries. Our safety uniforms combine durability, comfort, and visibility to keep your team secure and smart-looking.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 px-4 py-10">
      {cards.map((item, index) => (
        <motion.div
          key={index}
          className="w-full md:w-96 p-6 rounded-lg text-center text-white bg-blue-900 shadow-xl cursor-pointer"
          whileHover={{ scale: 1.05, backgroundColor: "#FF5733" }}
          transition={{ duration: 0.3 }}
          onClick={() => setClickedIndex(clickedIndex === index ? null : index)}
        >
          <motion.div
            className="text-5xl mb-4 flex justify-center"
            animate={clickedIndex === index ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {item.type === "component" ? (
              item.icon
            ) : (
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain filter invert brightness-0"
              />
            )}
          </motion.div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-base mt-3">{item.des}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedCards;
