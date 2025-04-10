import React from "react";
import blogImage1 from "../assets/blog1.png";
import blogImage2 from "../assets/blog2.png";

const blogs = [
  {
    title: "Blog Title 02",
    date: "14 May 2025",
    image: blogImage1,
    description:
      "Avoid negativity and focus on progress. Keep moving forward with confidence. Growth comes from learning and taking action.",
    imageLeft: true,
  },
  {
    title: "Blog Title 01",
    date: "14 May 2025",
    image: blogImage2,
    description:
      "Stay positive and embrace change. Success follows those who adapt and take steps toward their goals.",
    imageLeft: false,
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold uppercase text-center text-[#1D2A4D] mb-12">
          Safety Blogs
        </h2>

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
                <p className="text-orange-500 text-sm font-medium mt-1">{blog.date}</p>
                <p className="text-gray-600 mt-4">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
