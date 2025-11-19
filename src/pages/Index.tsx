import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollingGallery from "@/components/ScrollingGallery";
import About from "@/components/About";
import Crevia from "@/components/Crevia";
import AhzarCircle from "@/components/AhzarCircle";
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
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white font-heading">
            Own Your Journey
          </h2>
        </div>
      </section>
      <ScrollingGallery />
      <About />
      <Crevia />
      <AhzarCircle />
      <Events />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
