import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';

const partners = [
  { name: "Eco Light", image: partner1 },
  { name: "Ecotech", image: partner2 },
  { name: "Solar Energy", image: partner3 },
  { name: "Smart House", image: partner4 },
  { name: "Solar Power", image: partner5 },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#1D2A4D] mb-4">
          Our Partners
        </h2>

        {/* Divider */}
        <div className="mb-8 flex justify-center">
          <div className="w-12 h-12 text-2xl rounded-full flex items-center justify-center text-orange-500">
            <HandshakeRoundedIcon fontSize="large"/>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform hover:scale-105"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-16 sm:h-20 md:h-24 object-contain"
              />
              <p className="text-sm text-gray-600 mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
