import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

const teamMembers = [
  {
    name: "James George",
    role: "CEO / FOUNDER",
    image: team1,
  },
  {
    name: "Robert Joseph",
    role: "CEO / FOUNDER",
    image: team2,
  },
  {
    name: "Jeniffer Burns",
    role: "CEO / FOUNDER",
    image: team3,
  },
  {
    name: "Jhonson Robert",
    role: "CEO / FOUNDER",
    image: team4,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#1D2A4D] py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4">Safety Wear Team</h2>

        {/* Divider */}
        <div className="mb-8 flex justify-center">
          <div className="w-12 h-12 text-2xl rounded-full flex items-center justify-center bg-white text-orange-500">
            ⚡
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center px-4">
              <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
                <div className="w-full h-full border-4 border-white rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-sm md:text-base text-gray-300">{member.role}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
