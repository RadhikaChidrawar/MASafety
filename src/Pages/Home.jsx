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

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <AboutSection /> */}
      <AnimatedCards />
      <ServicesSection />
      <ProjectsSection />
      <ConsultancyBanner />
      <WhyChooseUs />
      <StatsSection />
      <ProductCarousel />
      <TeamSection />
      {/* <PartnersSection /> */}
      {/* <TestimonialSection /> */}
      <SafetyNews />
    </div>
  );
}
