import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import peterKariuki from "@/assets/peter-kariuki.png";
import chrisOketch from "@/assets/chris-oketch.png";

const testimonials = [
  {
    name: "Peter Kariuki",
    role: "Software Engineer",
    company: "",
    testimonial: "Amin is a true tech visionary and a dedicated community builder. His ability to inspire teams, spark innovation, and create meaningful impact makes him one of the most influential leaders in our ecosystem.",
    image: peterKariuki,
  },
  {
    name: "Chris Oketch",
    role: "Founder Minisend",
    company: "",
    testimonial: "Amin is one of the rare founders whose grit genuinely sets him apart. He refuses to give up on his vision, no matter the challenge. His commitment to creating real impact is evident in the transformative events he leads — from the AI Summit to the Freelancers Summit — each one pushing the community forward in meaningful ways.",
    image: chrisOketch,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive testimonials per page
  const getTestimonialsPerPage = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 3 : 1;
    }
    return 3;
  };
  
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(getTestimonialsPerPage());
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerPage);
  
  // Update on resize
  useState(() => {
    const handleResize = () => {
      const newPerPage = getTestimonialsPerPage();
      setTestimonialsPerPage(newPerPage);
      setCurrentIndex(prev => Math.min(prev, Math.max(0, testimonials.length - newPerPage)));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto animate-fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-heading">
            What People Say
          </h2>
          <p className="text-xl text-white font-body">
            Hear from members of our community
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonials ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[300px] md:min-h-[400px]">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border border-border/30 animate-fade-in group"
              >
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                </div>
                
                <p className="text-white leading-relaxed mb-6 text-base font-body">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground font-heading">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-bold font-body">{testimonial.role}</p>
                    {testimonial.company && <p className="text-sm text-white font-body">{testimonial.company}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
