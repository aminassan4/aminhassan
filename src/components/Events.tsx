import eventImage1 from "@/assets/event-1.jpg";
import eventImage2 from "@/assets/event-2.jpg";
import eventImage3 from "@/assets/event-3.jpg";
import eventImage4 from "@/assets/event-4.jpg";

const events = [
  {
    title: "Freelancers Summit 2024",
    date: "March 2024",
    description: "Brought together 200+ freelancers to discuss the future of work in Africa.",
    image: eventImage1,
  },
  {
    title: "DevFest Nairobi Interview",
    date: "November 2023",
    description: "Featured speaker discussing tech communities and developer ecosystems.",
    image: eventImage2,
  },
  {
    title: "Tech Community Panel",
    date: "September 2023",
    description: "Moderated panel on building sustainable tech communities in emerging markets.",
    image: eventImage3,
  },
  {
    title: "Creator Economy Workshop",
    date: "June 2023",
    description: "Workshop on monetization strategies for African creators and entrepreneurs.",
    image: eventImage4,
  },
];

const Events = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Events I've Done
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{event.date}</div>
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
