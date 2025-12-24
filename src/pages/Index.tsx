import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PlatformsSection from "@/components/PlatformsSection";
import ServicesSection from "@/components/ServicesSection";
import EngagementSection from "@/components/EngagementSection";
import WhyUsSection from "@/components/WhyUsSection";
import InvestorCTA from "@/components/InvestorCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PlatformsSection />
        <ServicesSection />
        <EngagementSection />
        <WhyUsSection />
        <InvestorCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
