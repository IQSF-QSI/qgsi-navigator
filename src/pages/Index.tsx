import HeroSection from "@/components/HeroSection";
import IndexSection from "@/components/IndexSection";
import PhilosophySection from "@/components/PhilosophySection";
import StructureSection from "@/components/StructureSection";
import PartnersSection from "@/components/PartnersSection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="index">
        <IndexSection />
      </div>
      <div id="philosophy">
        <PhilosophySection />
      </div>
      <div id="structure">
        <StructureSection />
      </div>
      <div id="partners">
        <PartnersSection />
      </div>
      <CallToActionSection />
    </div>
  );
};

export default Index;
