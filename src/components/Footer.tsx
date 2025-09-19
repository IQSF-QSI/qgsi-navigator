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
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Website"
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
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Documentation
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                API Access
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Research Reports
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Support Center
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Accessibility
              </Link>
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