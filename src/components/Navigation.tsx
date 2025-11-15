import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Amin Hassan</div>
        
        <div className="flex gap-2">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="hover:text-primary"
          >
            About Me
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("crevia")}
            className="hover:text-primary"
          >
            Crevia
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("ahzar")}
            className="hover:text-primary"
          >
            Ahzar Circle
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
