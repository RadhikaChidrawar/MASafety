import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import clientImage from "../assets/client1.png";
import testimonialbg from "../assets/testimonialbg.png";

const testimonials = [
  {
    name: "Mayra Paull",
    role: "Graphic Designer",
    image: clientImage,
    feedback:
      "I had a great experience working with this team. Their professionalism and creativity exceeded my expectations.",
  },
  {
    name: "John Doe",
    role: "Project Manager",
    image: clientImage,
    feedback:
      "The service was outstanding! The team was highly skilled and delivered the project on time with excellent quality.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4">
        
        {/* Left Side: Text & Testimonials */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg z-10">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#1D2A4D] mb-4">
            What About Clients
          </h2>
          <div className="mb-4 flex items-center">
            <div className="w-10 h-10 text-xl rounded-full flex items-center justify-center text-orange-500">
              ⚡
            </div>
          </div>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <p className="text-gray-600 mb-6 italic">{testimonial.feedback}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#1D2A4D]">{testimonial.name}</h3>
                    <p className="text-orange-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side: Background Image */}
        <div className="w-full md:w-1/2">
          <img
            src={testimonialbg}
            alt="Testimonial Background"
            className="rounded-lg shadow-lg object-cover h-80 md:h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
