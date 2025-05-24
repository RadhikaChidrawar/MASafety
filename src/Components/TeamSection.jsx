import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import team1 from "../assets/per1.jpeg";
import team2 from "../assets/per2.jpeg";
import team3 from "../assets/per3.jpeg";
import { LuPhoneCall } from "react-icons/lu";

const teamMembers = [
  {
    name: "Mahadev Waybase",
    role: "CEO / FOUNDER",
    image: team1,
    social: {
      phoneNo: 9922759640,
    },
  },
  {
    name: "Amit Mahavir Patil",
    role: "Marketing Director",
    image: team2,
    social: {
      phoneNo: 9766091811,
    },
  },
  {
    name: "Rutuja Ashok Chavan",
    role: " Admin",
    image: team3,
    social: {
      phoneNo: 7397966913,
    },
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#1D2A4D] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 relative inline-block">
            <span className="relative z-10">Our Expert Team</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-500 opacity-30 -z-0"></span>
          </h2>
          <p className="text-lg text-blue-100">
            Meet the dedicated professionals who make Safety Wear exceptional
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="relative"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-gradient-to-b from-blue-900 to-blue-800 rounded-xl p-6 pb-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-blue-400 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-transparent transition-all duration-500"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-300 mb-4">{member.role}</p> 
                  <div className="flex justify-center transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="bg-blue-600 px-4 py-1 rounded-full text-white text-sm shadow-md flex items-center gap-2">
                      <LuPhoneCall  />
                      {member?.social?.phoneNo}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24  bg-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !left-0 !text-blue-400 !w-12 !h-12 after:!text-xl"></div>
          <div className="swiper-button-next !right-0 !text-blue-400 !w-12 !h-12 after:!text-xl"></div>
        </Swiper>
      </div>
    </section>
  );
}
