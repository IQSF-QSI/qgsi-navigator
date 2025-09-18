import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Zap } from "lucide-react";
import nvidiaInceptionBadge from "@/assets/nvidia-inception-badge.svg";

const PhilosophySection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-display text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            INTELLIGENCE, DESIGNED
            <br />
            <span className="accent-gradient bg-clip-text text-transparent">
              WITH INTENTION.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Clarity of this magnitude requires a foundation of absolute trust. Our entire global studio is architected around three promises to you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Berlin Promise */}
          <Card className="relative p-12 card-gradient shadow-card hover:shadow-elegant transition-smooth group">
            <div className="absolute top-6 right-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Berlin
              </Badge>
            </div>
            
            <div className="mb-8">
              <Lock className="h-16 w-16 text-primary mb-6 group-hover:scale-110 transition-bounce" />
              
              <h3 className="text-display text-2xl font-bold text-foreground mb-4">
                THE BERLIN PROMISE
              </h3>
              
              <h4 className="text-lg font-semibold text-primary mb-6">
                Privacy as Peace of Mind.
              </h4>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Our products are engineered in our Berlin headquarters under GDPR, the world's most rigorous privacy standard. This isn't a technicality; it's our ethical core. It means your privacy is respected by design, giving you the peace of mind to explore freely.
            </p>
          </Card>
          
          {/* Tallinn Experience */}
          <Card className="relative p-12 card-gradient shadow-card hover:shadow-elegant transition-smooth group">
            <div className="absolute top-6 right-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Tallinn
              </Badge>
            </div>
            
            <div className="mb-8">
              <Zap className="h-16 w-16 text-primary mb-6 group-hover:scale-110 transition-bounce" />
              
              <h3 className="text-display text-2xl font-bold text-foreground mb-4">
                THE TALLINN EXPERIENCE
              </h3>
              
              <h4 className="text-lg font-semibold text-primary mb-6">
                Technology Made Effortless.
              </h4>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              From our digital HQ in Estonia, we design an experience that is seamless, intuitive, and beautiful. The most powerful technology is the kind you never have to think about, allowing the insights to flow effortlessly.
            </p>
          </Card>
          
          {/* NVIDIA Engine */}
          <Card className="relative p-12 card-gradient shadow-card hover:shadow-elegant transition-smooth group">
            <div className="absolute top-6 right-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                NVIDIA
              </Badge>
            </div>
            
            <div className="mb-8">
              <img 
                src={nvidiaInceptionBadge} 
                alt="NVIDIA Inception Program Member" 
                className="h-16 mb-6 group-hover:scale-105 transition-bounce"
              />
              
              <h3 className="text-display text-2xl font-bold text-foreground mb-4">
                THE NVIDIA ENGINE
              </h3>
              
              <h4 className="text-lg font-semibold text-primary mb-6">
                Brilliance Made Simple.
              </h4>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              To make sense of a complex world, you need an extraordinary lens. As members of the NVIDIA Inception program, we use the world's most advanced AI to do the heavy lifting. This is the silent engine that powers the simple, elegant clarity you see on your screen.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;