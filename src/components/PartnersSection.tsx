import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import nvidiaInceptionBadge from "@/assets/nvidia-inception-badge.svg";

const PartnersSection = () => {
  useEffect(() => {
    // Load the MembershipNext script if not already loaded
    const scriptId = 'membership-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://gsdba.chambermaster.com/Content/Script/Member.js';
      script.type = 'text/javascript';
      script.onload = () => {
        // Initialize the widget after script loads
        if (window.MNI) {
          new window.MNI.Widgets.Member(
            "mni-membership-638937738358779148",
            {
              member: 9381,
              styleTemplate: "#@id{text-align:center;position:relative}#@id .mn-widget-member-name{font-weight:700}#@id .mn-widget-member-logo{max-width:100%}"
            }
          ).create();
        }
      };
      document.head.appendChild(script);
    } else {
      // Script already loaded, just initialize widget
      if (window.MNI) {
        new window.MNI.Widgets.Member(
          "mni-membership-638937738358779148",
          {
            member: 9381,
            styleTemplate: "#@id{text-align:center;position:relative}#@id .mn-widget-member-name{font-weight:700}#@id .mn-widget-member-logo{max-width:100%}"
          }
        ).create();
      }
    }
  }, []);

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Our Memberships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Proud to be part of organizations that champion equality and human rights globally.
          </p>
          <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 shadow-elegant">
            Partner with Us
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div 
            id="mni-membership-638937738358779148"
            className="w-full max-w-2xl"
          />
          
          <div className="flex flex-col items-center">
            <img 
              src={nvidiaInceptionBadge} 
              alt="NVIDIA Inception Program Member" 
              className="h-24 mb-4"
            />
            <p className="text-muted-foreground text-center max-w-sm">
              Proud member of the NVIDIA Inception program, accelerating AI innovation for social good.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="h-24 w-48 flex items-center justify-center bg-gradient-primary rounded-lg mb-4 shadow-elegant">
              <h3 className="text-2xl font-bold text-white">StartOut</h3>
            </div>
            <p className="text-muted-foreground text-center max-w-sm">
              Member of StartOut, empowering LGBTQ+ entrepreneurs to build successful businesses and create positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extend the Window interface to include MNI
declare global {
  interface Window {
    MNI: {
      Widgets: {
        Member: new (elementId: string, options: {
          member: number;
          styleTemplate: string;
        }) => {
          create: () => void;
        };
      };
    };
  }
}

export default PartnersSection;