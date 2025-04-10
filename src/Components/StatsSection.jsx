import backgroundImage from "../assets/backgroundImage.jpg";
import { Sun } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { number: "2477", title: "FINISHED PROJECTS" },
    { number: "890", title: "HAPPY CLIENTS" },
    { number: "9696", title: "WORKING WORKING" },
    { number: "150", title: "GOOD ENGINEER" },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 bg-white bg-opacity-80 rounded-lg text-center shadow-lg 
                transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-100
                ${index === 1 ? "bg-gray-300 text-gray-900" : "text-gray-800"}`}
            >
              <h3 className="text-3xl md:text-4xl font-bold">{stat.number}</h3>
              <Sun
                className={`h-10 w-10 md:h-12 md:w-12 mx-auto my-3 ${
                  index === 1 ? "text-red-600" : "text-orange-500"
                }`}
              />
              <p className="font-semibold text-sm sm:text-base">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
