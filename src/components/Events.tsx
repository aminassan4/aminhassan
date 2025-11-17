import freelancersSummit from "@/assets/freelancers-summit-2024.jpg";
import aiSummit from "@/assets/ai-summit-2025.jpg";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Freelancers Summit 2024",
    date: "March 2024",
    description: "Brought together 200+ freelancers to discuss the future of work in Africa.",
    image: freelancersSummit,
  },
  {
    title: "AI Summit 2025",
    date: "January 2025",
    description: "Leading discussions on artificial intelligence and its impact on African innovation.",
    image: aiSummit,
  },
];

const Events = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto animate-fade-up relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary font-heading">
          Events I've Done
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 border border-border/30 group"
            >
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-bold mb-2 font-body">{event.date}</div>
                <h3 className="text-2xl font-bold mb-3 font-heading">{event.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-body mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">
                  View Highlights
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
