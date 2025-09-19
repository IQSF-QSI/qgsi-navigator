import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-32 hero-gradient">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-16">
          <Globe className="h-24 w-24 text-primary-foreground/80 mx-auto mb-12 animate-pulse" />
          
          <h2 className="text-display text-5xl md:text-7xl font-bold text-primary-foreground mb-8 tracking-tight">
            YOUR WORLD
            <br />
            <span className="bg-gradient-to-r from-primary-foreground via-primary-glow to-primary-foreground bg-clip-text text-transparent">
              AWAITS.
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              The world is complex. But it is also beautiful.
            </p>
            
            <div className="space-y-4 mb-12">
              <p className="text-xl text-primary-foreground/80">See it clearly.</p>
              <p className="text-xl text-primary-foreground/80">Navigate it confidently.</p>
              <p className="text-2xl font-bold text-primary-foreground">Design your world.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-12 py-6 text-lg font-semibold shadow-glow transition-smooth"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-12 py-6 text-lg font-semibold transition-smooth"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;