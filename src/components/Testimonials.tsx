import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Kimani",
    role: "Content Creator",
    company: "Digital Marketing Agency",
    testimonial: "Working with Amin has been transformative for my creative career. His insights and guidance through Crevia have helped me monetize my content effectively.",
    image: "👩🏾‍💼",
  },
  {
    name: "David Ochieng",
    role: "Tech Entrepreneur",
    company: "Startup Founder",
    testimonial: "Ahzar Circle provided the network and mentorship I needed to take my startup to the next level. The community is genuinely supportive and full of talented individuals.",
    image: "👨🏾‍💻",
  },
  {
    name: "Grace Wanjiku",
    role: "Digital Marketer",
    company: "E-commerce Brand",
    testimonial: "Amin's approach to community building and marketing is exceptional. He's helped me understand the creator economy and build sustainable income streams.",
    image: "👩🏾‍🎨",
  },
  {
    name: "Michael Otieno",
    role: "Software Developer",
    company: "Tech Company",
    testimonial: "The events and workshops organized by Amin are always top-notch. I've learned so much and made invaluable connections that have advanced my career.",
    image: "👨🏾‍💼",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerPage);

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
          <div className="grid md:grid-cols-3 gap-6 min-h-[400px]">
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
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-foreground font-heading">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-bold font-body">{testimonial.role}</p>
                    <p className="text-sm text-white font-body">{testimonial.company}</p>
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
