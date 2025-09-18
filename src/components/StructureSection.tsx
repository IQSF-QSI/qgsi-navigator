import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Building2, ArrowRight } from "lucide-react";

const StructureSection = () => {
  return (
    <section className="py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-display text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            FOR EVERYONE. FOR LEADERS.
            <br />
            <span className="accent-gradient bg-clip-text text-transparent">
              FOREVER.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our unique structure is designed to ensure our mission endures, expands, and serves everyone.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Foundation */}
          <Card className="relative p-12 card-gradient shadow-card hover:shadow-elegant transition-smooth group">
            <div className="absolute top-6 right-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                501(c)(3)
              </Badge>
            </div>
            
            <div className="mb-8">
              <Heart className="h-16 w-16 text-primary mb-6 group-hover:scale-110 transition-bounce" />
              
              <h3 className="text-display text-3xl font-bold text-foreground mb-4">
                THE FOUNDATION
              </h3>
              
              <h4 className="text-xl font-semibold text-primary mb-6">
                A Gift to the Community
              </h4>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our 501(c)(3) Foundation ensures the GQSI and our independent research remain free and accessible to the public, always. It is our commitment to the community, fueled by grants and public support. Every search you make helps contribute to a clearer picture for all.
            </p>
            
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
              Support the Foundation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
          
          {/* QSI for Partners */}
          <Card className="relative p-12 card-gradient shadow-card hover:shadow-elegant transition-smooth group">
            <div className="absolute top-6 right-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                PBC
              </Badge>
            </div>
            
            <div className="mb-8">
              <Building2 className="h-16 w-16 text-primary mb-6 group-hover:scale-110 transition-bounce" />
              
              <h3 className="text-display text-3xl font-bold text-foreground mb-4">
                QSI FOR PARTNERS
              </h3>
              
              <h4 className="text-xl font-semibold text-primary mb-6">
                Intelligence for the Future of Leadership
              </h4>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vector for Good PBC provides the essential intelligence for the world's most forward-thinking organizations. We equip leaders with our Duty of Care Intelligence Platform to build safer, more inclusive, and more effective global teams.
            </p>
            
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-glow transition-smooth">
              Partner with Vector for Good
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
        
        {/* Virtuous Cycle */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-12 card-gradient rounded-2xl shadow-card">
            <h3 className="text-display text-2xl font-bold text-foreground mb-6">
              The Virtuous Cycle
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The success of our enterprise partnerships is legally mandated to fund the Foundation, creating a virtuous and self-sustaining cycle where our business innovation fuels our public promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;