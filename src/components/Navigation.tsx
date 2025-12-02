import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold font-heading text-foreground tracking-tight">Amin Hussein</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 items-center">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="hover:text-primary hover:bg-primary/10 transition-all duration-300 font-bold"
          >
            About Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("crevia")}
            className="hover:text-primary hover:bg-primary/10 transition-all duration-300 font-bold"
          >
            Crevia
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary hover:bg-primary/10 transition-all duration-300 font-bold"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="w-full justify-start hover:text-primary hover:bg-primary/10 transition-all duration-300 font-bold"
            >
              About Me
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("crevia")}
              className="w-full justify-start hover:text-primary hover:bg-primary/10 transition-all duration-300 font-bold"
            >
              Crevia
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="w-full justify-start hover:text-primary hover:bg-primary/10 transition-all duration-300 font-bold"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
