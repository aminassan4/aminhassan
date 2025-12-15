import { Button } from "@/components/ui/button";
import { Sparkles, Link2, Bot } from "lucide-react";

const Crevia = () => {
  return (
    <section id="crevia" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto animate-fade-up">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4 font-body">The Platform</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Built for creators.<br />
            <span className="text-primary">Powered by ambition.</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-body">
            Crevia is where your story becomes your empire.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border border-border/30 group">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Link2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-heading">Crevia Connect</h3>
            <p className="text-white leading-relaxed font-body">
              Connect. Collaborate. Conquer. Your gateway to brand partnerships that matter.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border border-border/30 group">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-heading">Crevia Link</h3>
            <p className="text-white leading-relaxed font-body">
              One link. Infinite possibilities. Your entire story, beautifully told.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border border-border/30 group">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Bot className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-heading">Crevia AI (Kira)</h3>
            <p className="text-white leading-relaxed font-body">
              Your AI co-pilot. Smarter strategies. Faster growth. Zero guesswork.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://lnk.bio/Crevia" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-bold shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)]">
              Learn More About Crevia
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Crevia;
