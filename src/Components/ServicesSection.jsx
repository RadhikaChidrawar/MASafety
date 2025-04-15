import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export default function ServicesSection() {
  const services = [
    { title: "Service Title2", image: service1 },
    { title: "Service Title3", image: service2 },
    { title: "Service Title4", image: service3 },
  ];

  return (
    <section className="px-4 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800">
        SAFETY WEAR SERVICES
      </h2>

      {/* Divider with Icon */}
      <div className="flex justify-center items-center my-4">
        <span className="w-32 h-px bg-gray-300"></span>
        <span className="mx-2 text-orange-500 text-3xl"><HealthAndSafetyIcon fontSize="large"/></span>
        <span className="w-32 h-px bg-gray-300"></span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 place-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 md:w-96 transition-transform hover:scale-105"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            {/* Service Title */}
            <div className="p-4 text-center bg-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}
