import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 text-foreground py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-heading">Amin Hassan</h3>
            <p className="text-foreground/60 leading-relaxed font-body">
              Building communities and empowering creators across Africa.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-heading">Projects</h4>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#crevia" className="text-foreground/60 hover:text-primary transition-colors">
                  Crevia
                </a>
              </li>
              <li>
                <a href="#ahzar" className="text-foreground/60 hover:text-primary transition-colors">
                  Ahzar Circle
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-heading">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center text-foreground/60 font-body">
          <p>&copy; {currentYear} Amin Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
