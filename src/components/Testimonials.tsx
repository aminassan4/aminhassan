import { Quote } from "lucide-react";
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
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
    </section>
  );
};

export default Testimonials;
