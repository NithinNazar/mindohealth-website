import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import HeroSectionAlt from "./components/sections/HeroSectionAlt";
import HeroSectionVariant3 from "./components/sections/HeroSectionVariant3";
import FeelingOverwhelmedSection from "./components/sections/FeelingOverwhelmedSection";
import StatsSection from "./components/sections/StatsSection";
import WhyMindoHealthSection from "./components/sections/WhyMindoHealthSection";
import DesignedWithIntentionSection from "./components/sections/DesignedWithIntentionSection";
import MindoCareUnitsSection from "./components/sections/MindoCareUnitsSection";
import SupportiveCommunitySection from "./components/sections/SupportiveCommunitySection";
import CorporateWellbeingSection from "./components/sections/CorporateWellbeingSection";
import MindoYellowPagesSection from "./components/sections/MindoYellowPagesSection";
import ContactLocationSection from "./components/sections/ContactLocationSection";
import mindoLogo from "./assets/mindo_logo.jpeg";
import heroVideo from "./assets/mindo_hero_video.mp4";

function App() {
  const navigationLinks = [
    { label: "Experts", href: "#experts" },
    { label: "Clinics", href: "#clinics" },
    { label: "Services", href: "#services" },
    { label: "Conditions", href: "#conditions" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        logo={mindoLogo}
        links={navigationLinks}
        ctaText="Book Consultation"
        ctaAction={() => console.log("CTA clicked")}
      />

      {/* Hero Section - Option 1: Split Layout with Blurred Background */}
      <HeroSection
        videoSrc={heroVideo}
        headline="Headlines and Description"
        subheadline="Experience comprehensive mental health support with our 100% online platform. Connect with expert therapists, access live consultations, and find the care you need, whenever you need it."
        ctaButtons={[]}
      />

      {/* Hero Section - Option 2: Full Width Video with Overlapping Text */}
      <HeroSectionAlt
        videoSrc={heroVideo}
        headline="Headlines and Description"
        subheadline="Experience comprehensive mental health support with our 100% online platform. Connect with expert therapists, access live consultations, and find the care you need, whenever you need it."
        ctaButtons={[]}
      />

      {/* Hero Section - Option 3: Colored Text with Gradient Background */}
      <HeroSectionVariant3
        videoSrc={heroVideo}
        headline="Real care adapts to your life, your people, your pace."
        subheadline="Care doesn't happen in isolation. It works when it's rooted in your everyday life."
        ctaButtons={[]}
      />

      {/* Feeling Overwhelmed Section */}
      <FeelingOverwhelmedSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why MindoHealth Section */}
      <WhyMindoHealthSection />

      {/* Designed with Intention Section */}
      <DesignedWithIntentionSection />

      {/* Mindo Care Units Section */}
      <MindoCareUnitsSection />

      {/* Supportive Community Section */}
      <SupportiveCommunitySection />

      {/* Corporate Wellbeing Section */}
      <CorporateWellbeingSection />

      {/* Mindo Yellow Pages Section */}
      <MindoYellowPagesSection />

      {/* Contact & Location Section */}
      <ContactLocationSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
