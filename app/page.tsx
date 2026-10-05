import HeroSection from "@/app/home-components/HeroSection";
import BookingBar from "@/app/home-components/BookingBar";
import AboutSection from "@/app/home-components/AboutSection";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import ServicesSection from "./home-components/ServicesSection";
import WhyChooseUs from "./home-components/WhyChooseUs";
import CaseStoriesSection from "./home-components/CaseStoriesSection";
import HowItWorksSection from "./home-components/HowItWorksSection";
import FullBookingSection from "./home-components/FullBookingSection";
import TestimonialsSection from "./home-components/TestimonialsSection";
import SoloDoctorSection from "./home-components/SoloDoctorSection";
import FaqSection from "./home-components/FaqSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BookingBar />
      <AboutSection />
      <InfiniteMarquee />
      <ServicesSection />
      <InfiniteMarquee />
      <WhyChooseUs />
      <CaseStoriesSection />
      <HowItWorksSection />
      <InfiniteMarquee />
      <FullBookingSection />
      <InfiniteMarquee />
      <TestimonialsSection />
      <SoloDoctorSection />
      <FaqSection />
    </main>
  );
}
