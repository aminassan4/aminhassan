import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollingGallery from "@/components/ScrollingGallery";
import About from "@/components/About";
import Crevia from "@/components/Crevia";
import Events from "@/components/Events";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-6 font-body animate-fade-up">The Manifesto</p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold font-heading animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Own Your </span>
            <span className="text-primary">Story</span>
          </h2>
          <p className="mt-6 text-xl text-white max-w-2xl mx-auto font-body animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Because nobody else will write it for you.
          </p>
        </div>
      </section>
      <ScrollingGallery />
      <About />
      <Crevia />
      <Events />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
