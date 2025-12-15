import freelancersSummit from "@/assets/freelancers-summit-2024.jpg";
import aiSummit from "@/assets/ai-summit-2025.jpg";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Freelancers Summit 2024",
    date: "October 2024",
    description: "Where freedom met opportunity. 50+ creatives. One mission: Own your independence.",
    image: freelancersSummit,
    link: "https://youtu.be/-20xdAqoBfo?si=MuWtsfa7WjGdKwsP",
  },
  {
    title: "AI Summit 2025",
    date: "August 2025",
    description: "The future isn't coming. It's here. 100+ innovators building it—together.",
    image: aiSummit,
    link: "https://youtube.com/shorts/BKaxVxiLz0Y?si=gOGQE2PKxnEnRBNB",
  },
];

const Events = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto animate-fade-up relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4 font-body">Moments That Moved</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Stories aren't just told.<br />
            <span className="text-primary">They're lived.</span>
          </h2>
        </div>
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
                <p className="text-white leading-relaxed font-body mb-4">{event.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    View Highlights
                  </a>
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
