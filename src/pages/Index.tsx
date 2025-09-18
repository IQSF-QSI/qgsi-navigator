import HeroSection from "@/components/HeroSection";
import IndexSection from "@/components/IndexSection";
import PhilosophySection from "@/components/PhilosophySection";
import StructureSection from "@/components/StructureSection";
import PartnersSection from "@/components/PartnersSection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IndexSection />
      <PhilosophySection />
      <StructureSection />
      <PartnersSection />
      <CallToActionSection />
    </main>
  );
};

export default Index;
