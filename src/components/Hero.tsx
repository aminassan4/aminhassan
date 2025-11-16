import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Ambient glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-up relative z-10">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-5xl">👋</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-heading">
            Hey, I'm <br />
            <span className="text-primary">Amin Hassan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-bold font-body">
            Entrepreneur • Community Builder • Marketer
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg font-body">
            I'm the creator of Crevia and founder of Ahzar Circle. 
            I build communities and empower creators across Africa through technology, marketing, 
            and meaningful connections.
          </p>
          <Button 
            size="lg" 
            className="mt-4 text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 font-bold"
            onClick={scrollToContact}
          >
            Contact Me
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <img 
            src={heroImage} 
            alt="Amin Hassan - Entrepreneur and Community Builder" 
            className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square border border-primary/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
