import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Amin Hassan</h3>
            <p className="text-accent-foreground/70 leading-relaxed">
              Building communities and empowering creators across Africa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li>
                <a href="#crevia" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  Crevia
                </a>
              </li>
              <li>
                <a href="#ahzar" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                  Ahzar Circle
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 pt-8 text-center text-accent-foreground/70">
          <p>&copy; {currentYear} Amin Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
