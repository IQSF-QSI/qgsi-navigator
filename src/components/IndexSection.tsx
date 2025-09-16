import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Shield, Brain, Users, Loader2 } from "lucide-react";
import { useSafetyIndexStore } from "@/stores/safetyIndexStore";

const IndexSection = () => {
  const { safetyData, loading, error, fetchSafetyData } = useSafetyIndexStore();

  useEffect(() => {
    fetchSafetyData();
  }, [fetchSafetyData]);

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
        
        {/* Data Preview Section */}
        {loading && (
          <div className="text-center mb-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading global safety data...</p>
          </div>
        )}

        {error && (
          <div className="text-center mb-12 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive">Failed to load data: {error}</p>
          </div>
        )}

        {safetyData.length > 0 && (
          <div className="mb-12">
            <h3 className="text-display text-2xl font-semibold text-foreground mb-8 text-center">
              Live Safety Index Data
            </h3>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {safetyData.slice(0, 6).map((country) => (
                  <div key={country.country} className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <p className="font-semibold text-foreground">#{country.rank} {country.country}</p>
                      <p className="text-sm text-muted-foreground">Score: {country.score}</p>
                    </div>
                  </div>
                ))}
              </div>
              {safetyData.length > 6 && (
                <p className="text-center text-muted-foreground mt-4">
                  +{safetyData.length - 6} more countries available
                </p>
              )}
            </div>
          </div>
        )}
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold shadow-card transition-smooth"
          >
            Access the Full GQSI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndexSection;