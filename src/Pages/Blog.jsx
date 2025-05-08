import React from "react";
import { blogs } from "../assets/mockData";
import image from '../assets/safety.png';

// Utility function to format date
function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={image}
          alt="Safety First"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Blog Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">

        <div className="space-y-16">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                blog.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left px-2">
                <h3 className="text-2xl font-bold text-[#1D2A4D]">{blog.title}</h3>
                <p className="text-black mt-4">{blog.description}</p>
                <p className="text-gray-600 mt-4">{blog.content}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
