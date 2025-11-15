import { Button } from "@/components/ui/button";
import { Sparkles, Link2, Bot } from "lucide-react";

const Crevia = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto animate-fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Crevia</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering creators to build, launch, and monetize their creative career
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <Link2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Crevia Connect</h3>
            <p className="text-foreground/70 leading-relaxed">
              Build your network and collaborate with other creators in your space.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Crevia Link</h3>
            <p className="text-foreground/70 leading-relaxed">
              Showcase your work and projects in one beautiful link-in-bio page.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <Bot className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Crevia AI (Kira)</h3>
            <p className="text-foreground/70 leading-relaxed">
              AI-powered assistant to help you grow and optimize your creative business.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg">
            Learn More About Crevia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Crevia;
