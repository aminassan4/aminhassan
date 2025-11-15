import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-up">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-5xl">👋</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hey, I'm <br />
            <span className="text-primary">Amin Hassan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Entrepreneur • Community Builder • Marketer
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
            I'm the creator of Crevia and founder of Ahzar Circle. 
            I build communities and empower creators across Africa through technology, marketing, 
            and meaningful connections.
          </p>
          <Button 
            size="lg" 
            className="mt-4 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollToContact}
          >
            Contact Me
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
          <img 
            src={heroImage} 
            alt="Amin Hassan" 
            className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
