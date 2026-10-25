import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import StepsSection from "../components/StepsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import IntegrationsSection from "../components/IntegrationsSection";
import SolutionsSection from "../components/SolutionsSection";
import PricingSection from "../components/PricingSection";
import ResourcesSection from "../components/ResourcesSection";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <div id="features">
        <FeaturesSection />
      </div>
      
      <div id="integrations">
        <IntegrationsSection />
      </div>
      
      <div id="solutions">
        <SolutionsSection />
      </div>
      
      <div id="resources">
        <ResourcesSection />
      </div>

      <StepsSection />

      <div id="pricing">
        <PricingSection />
      </div>

      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
