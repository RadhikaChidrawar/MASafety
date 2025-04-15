// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import team1 from "../assets/team1.png";
// import team2 from "../assets/team2.jpg";
// import team3 from "../assets/team3.jpg";
// import team4 from "../assets/team4.jpg";

// const teamMembers = [
//   {
//     name: "James George",
//     role: "CEO / FOUNDER",
//     image: team1,
//   },
//   {
//     name: "Robert Joseph",
//     role: "CEO / FOUNDER",
//     image: team2,
//   },
//   {
//     name: "Jeniffer Burns",
//     role: "CEO / FOUNDER",
//     image: team3,
//   },
//   {
//     name: "Jhonson Robert",
//     role: "CEO / FOUNDER",
//     image: team4,
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="bg-[#1D2A4D] py-16 text-white">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4">Safety Wear Team</h2>

//         {/* Divider */}
//         <div className="mb-8 flex justify-center">
//           {/* <div className="w-12 h-12 text-2xl rounded-full flex items-center justify-center bg-white text-orange-500">
//             ⚡
//           </div> */}
//         </div>

//         {/* Swiper Carousel */}
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           navigation={true}
//           modules={[Navigation]}
//           className="pb-12"
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index} className="flex flex-col items-center px-4">
//               <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
//                 <div className="w-full h-full border-4 border-white rounded-full overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <h3 className="text-base md:text-lg font-semibold mt-4">{member.name}</h3>
//               <p className="text-sm md:text-base text-gray-300">{member.role}</p>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

const teamMembers = [
  {
    name: "James George",
    role: "CEO / FOUNDER",
    image: team1,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Robert Joseph",
    role: "Marketing Director",
    image: team2,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Jeniffer Burns",
    role: "Product Designer",
    image: team3,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Jhonson Robert",
    role: "Lead Developer",
    image: team4,
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href={member.social.instagram} className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
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