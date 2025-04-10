import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import helmet from "../assets/helmet.png";
import shoes from "../assets/shoes.png";
import fireman from "../assets/fireman.png";
import safetykit from "../assets/safety-kit.png";

const products = [
  { id: 1, title: 'Solar Product Title 05', image: helmet },
  { id: 2, title: 'Solar Product Title 02', image: shoes },
  { id: 3, title: 'Solar Product Title 03', image: fireman },
  { id: 4, title: 'Solar Product Title 04', image: safetykit },
];

export default function ProductCarousel() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        SAFETY WEAR ACCESSORIES
      </h2>
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
