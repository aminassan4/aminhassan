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
