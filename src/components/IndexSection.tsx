import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Shield, Brain, Users } from "lucide-react";

const IndexSection = () => {
  return (
    <section className="py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-display text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            THE GLOBAL QUEER
            <br />
            <span className="accent-gradient bg-clip-text text-transparent">
              SAFETY INDEX (GQSI)
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This is your mirror. Your map. Your lens.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-display text-3xl font-semibold text-foreground mb-6">
              Intelligence that understands you
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The GQSI is our core creation—a living, breathing tool that makes the invisible visible. We have decoded the DNA of safety—its laws, its healthcare, its unspoken social codes—and woven it into a single, intuitive platform.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our Intersectional AI is designed with a fundamental truth in mind: you are not a single data point. It understands the beautiful, nuanced layers of your identity, providing a picture of the world that is as unique as you are.
            </p>
            
            <p className="text-lg text-foreground font-medium">
              This is intelligence that empowers you to choose your destination, plan your journey, and walk into any room with the certainty that you belong.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-8 card-gradient shadow-card transition-smooth hover:shadow-elegant">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-display text-lg font-semibold text-foreground mb-2">
                Global Coverage
              </h4>
              <p className="text-muted-foreground text-sm">
                Comprehensive data across 195+ countries and territories
              </p>
            </Card>
            
            <Card className="p-8 card-gradient shadow-card transition-smooth hover:shadow-elegant">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-display text-lg font-semibold text-foreground mb-2">
                Legal Framework
              </h4>
              <p className="text-muted-foreground text-sm">
                Real-time tracking of laws, rights, and protections
              </p>
            </Card>
            
            <Card className="p-8 card-gradient shadow-card transition-smooth hover:shadow-elegant">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-display text-lg font-semibold text-foreground mb-2">
                Intersectional AI
              </h4>
              <p className="text-muted-foreground text-sm">
                Understanding the complexity of your unique identity
              </p>
            </Card>
            
            <Card className="p-8 card-gradient shadow-card transition-smooth hover:shadow-elegant">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-display text-lg font-semibold text-foreground mb-2">
                Community Insights
              </h4>
              <p className="text-muted-foreground text-sm">
                Social climate data from trusted community sources
              </p>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold shadow-card transition-smooth"
          >
            Access the GQSI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndexSection;