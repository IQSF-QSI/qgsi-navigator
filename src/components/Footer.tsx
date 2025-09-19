import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">IQSF</h3>
            <p className="text-muted-foreground text-sm">
              International Queer Safety Foundation - Intelligence designed with intention for authentic living worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@iqsf.org"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/iqsf_org"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/iqsf"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://iqsf.org"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("#index")}
                className="text-muted-foreground hover:text-primary text-sm transition-colors text-left"
              >
                Safety Index
              </button>
              <button
                onClick={() => scrollToSection("#philosophy")}
                className="text-muted-foreground hover:text-primary text-sm transition-colors text-left"
              >
                Our Philosophy
              </button>
              <button
                onClick={() => scrollToSection("#structure")}
                className="text-muted-foreground hover:text-primary text-sm transition-colors text-left"
              >
                Our Structure
              </button>
              <button
                onClick={() => scrollToSection("#partners")}
                className="text-muted-foreground hover:text-primary text-sm transition-colors text-left"
              >
                Partners
              </button>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://docs.iqsf.org"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <a
                href="https://api.iqsf.org"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Access
              </a>
              <a
                href="https://research.iqsf.org"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research Reports
              </a>
              <a
                href="https://support.iqsf.org"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Center
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://iqsf.org/privacy"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="https://iqsf.org/terms"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              <a
                href="https://iqsf.org/cookies"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
              <a
                href="https://iqsf.org/accessibility"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accessibility
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 International Queer Safety Foundation. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Intelligence designed with intention.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;