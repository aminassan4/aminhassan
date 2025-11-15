import Hero from "@/components/Hero";
import About from "@/components/About";
import Crevia from "@/components/Crevia";
import AhzarCircle from "@/components/AhzarCircle";
import Events from "@/components/Events";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Crevia />
      <AhzarCircle />
      <Events />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
