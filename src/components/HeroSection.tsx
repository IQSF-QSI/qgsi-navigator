import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-connectivity.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 hero-gradient">
        <img 
          src={heroImage} 
          alt="Global connectivity representing worldwide safety intelligence"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-display text-6xl md:text-8xl font-bold text-primary-foreground mb-8 leading-none tracking-tight">
          CONFIDENCE IS THE
          <br />
          <span className="bg-gradient-to-r from-primary-foreground via-primary-glow to-primary-foreground bg-clip-text text-transparent">
            ULTIMATE FREEDOM.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed">
          The world is not unsafe; it is simply unclear. In ambiguity, we hesitate. We shrink. We plan our lives around the unknown.
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-16 leading-relaxed">
          At IQSF, we believe the greatest luxury is the freedom to move through the world as your authentic self. We are a global design and intelligence studio dedicated to one mission: to translate the world's complexity into profound, personal clarity.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <p className="text-xl text-primary-foreground/90 font-medium">
            We don't just give you data. We give you the confidence to design your world.
          </p>
          
          {/* Interactive Search Preview */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Design Your World..."
                className="pl-12 h-14 text-lg bg-background/95 backdrop-blur-sm border-primary-glow shadow-elegant"
              />
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-12 py-6 text-lg font-semibold shadow-glow transition-smooth"
          >
            Explore the Index
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;