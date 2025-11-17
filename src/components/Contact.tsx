import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-heading">Get In Touch</h2>
          <p className="text-xl text-muted-foreground font-body">
            Have a project or idea? Let's talk about it.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-elegant)] border border-border/30 hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Email</p>
                <a
                  href="mailto:amin@crevia.app"
                  className="text-lg font-bold hover:text-primary transition-colors font-body"
                >
                  amin@crevia.app
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-elegant)] border border-border/30 hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
            <p className="text-sm text-muted-foreground mb-4 font-body">Connect with me</p>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
