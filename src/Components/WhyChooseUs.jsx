import { Star, Heart, Gem, Shield, Umbrella, Triangle } from "lucide-react";
import workerImage from "../assets/workerImage.png"; 
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export default function WhyChooseUs() {
  const features = [
  {
    title: "Trusted Quality",
    icon: <Star />,
    description: "We deliver only top-tier safety products tested and certified for reliability in the most demanding environments."
  },
  {
    title: "Customer Satisfaction",
    icon: <Heart />,
    description: "Our commitment to customer care means you get the best support, fast responses, and smooth service."
  },
  {
    title: "Premium Materials",
    icon: <Gem />,
    description: "We use high-grade materials to ensure our gear offers long-lasting protection and comfort."
  },
  {
    title: "Certified Safety Standards",
    icon: <Shield />,
    description: "All products meet or exceed industry safety regulations to keep your workforce secure and compliant."
  },
  {
    title: "All-Weather Protection",
    icon: <Umbrella />,
    description: "Our equipment performs in all conditions — rain, heat, or dust — ensuring 24/7 protection."
  },
  {
    title: "Innovative Design",
    icon: <Triangle />,
    description: "We combine functionality with modern design to deliver safety gear that’s both practical and professional."
  },
];

  return (
    <section className="px-6 py-10 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">WHY CHOOSE SAFETY WEAR</h2>

      {/* Divider */}
      <div className="flex justify-center items-center my-4">
        <span className="w-32 h-px bg-gray-300"></span>
        <span className="mx-2 text-orange-500 text-xl"><HealthAndSafetyIcon fontSize="large"/></span>
        <span className="w-32 h-px bg-gray-300"></span>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        {/* Left Features */}
        <div className="flex-1 space-y-6">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center flex-1">
          <img src={workerImage} alt="Worker" className="w-56 sm:w-64 md:w-72 lg:w-80 object-contain" />
        </div>

        {/* Right Features */}
        <div className="flex-1 space-y-6">
          {features.slice(3, 6).map((feature, index) => (
            <div key={index} className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
