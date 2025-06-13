import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import helmet from "../assets/helmet.png";
import shoes from "../assets/shoes.png";
import fireman from "../assets/fireman.png";
import safetykit from "../assets/safety-kit.png";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

// new shoes img
import prod17 from "../assets/Shoe3.png" //"./Shoe3.png";
import prod18 from "../assets/shoes.png"//"./shoes.png";
import prod19 from "../assets/shoes5.png"//"./shoes5.png";
import prod20 from "../assets/shos6.png"//"./shos6.png";

const products = [
  { id: 1, title: 'Industrial Safety Helmet', image: helmet },
  { id: 2, title: 'Steel Toe Safety Shoes', image: shoes },
  { id: 3, title: 'Crazy Horse Green Leather Shoes', image: prod17 },
  { id: 4, title: 'Buff Barton Leather Shoes', image: prod18 },
  { id: 5, title: 'Buff Barton Leather Shoes - Nitrile Sole', image: prod19 },
  { id: 6, title: 'Buff Barton Leather Shoes (701)', image: prod20 },
];

export default function ProductCarousel() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        SAFETY WEAR SERVICES
      </h2>
      {/* Divider with Icon */}
      <div className="flex justify-center items-center my-4">
        <span className="w-32 h-px bg-gray-300"></span>
        <span className="mx-2 text-orange-500 text-3xl"><HealthAndSafetyIcon fontSize="large"/></span>
        <span className="w-32 h-px bg-gray-300"></span>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-6"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white border rounded-lg p-4 shadow-lg text-center hover:scale-105 transition-transform">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-contain mx-auto"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {product.title}
              </h3>
              <p className="text-red-600 font-medium mt-2">Bulk Order (Available)</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
