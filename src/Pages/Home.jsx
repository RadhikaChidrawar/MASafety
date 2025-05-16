import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import AnimatedCards from "../Components/AnimatedCards";
import ConsultancyBanner from "../Components/ConsultancyBanner";
import PartnersSection from "../Components/PartnersSection";
import ProductCarousel from "../Components/ProductCarousel";
import ProjectsSection from "../Components/ProjectsSection";
import SafetyNews from "../Components/SafetyNews";
import ServicesSection from "../Components/ServicesSection";
import StatsSection from "../Components/StatsSection";
import TeamSection from "../Components/TeamSection";
import TestimonialSection from "../Components/TestimonialSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import Doc from "../Components/DocContainer"; 
import DocContainer from "../Components/DocContainer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AnimatedCards />
      <ProductCarousel />
      <ProjectsSection />
      <WhyChooseUs />
      <TeamSection />

      {/* Sticky "Ask Any Question" Button */}
      <button
        className="fixed bottom-5 right-5 bg-orange-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-orange-700 transition z-50"
        onClick={() => alert("You clicked Ask Any Question!")}
      >
        Ask Any Question
      </button>

      <DocContainer/>
    </div>
  );
}
