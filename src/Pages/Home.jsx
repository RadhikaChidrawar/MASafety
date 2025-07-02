import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import AnimatedCards from "../Components/AnimatedCards";
import ProductCarousel from "../Components/ProductCarousel";
import ProjectsSection from "../Components/ProjectsSection";
import TeamSection from "../Components/TeamSection";
import WhyChooseUs from "../Components/WhyChooseUs"; 
import DocContainer from "../Components/DocContainer";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate()
  return (
    <div>
      <HeroSection />
      <AnimatedCards />
      <ProductCarousel />
      <ProjectsSection />
      <WhyChooseUs />
      <TeamSection />

      <button
        className="fixed bottom-5 right-5 bg-orange-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-orange-700 transition z-50"
        onClick={() =>  Navigate("/Contact")}
      >
        Ask Any Question
      </button>

      <DocContainer/>
    </div>
  );
}
