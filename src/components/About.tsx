const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm <strong className="text-foreground font-semibold">Amin Hassan</strong>, 
              a passionate entrepreneur and community builder dedicated to empowering the next 
              generation of African creators and innovators.
            </p>
            <p>
              As the <strong className="text-primary font-semibold">Founder of Kaizen Africa</strong>, 
              I've built a thriving community of <strong>1,000+ members</strong> focused on continuous 
              growth, learning, and collaboration in tech, marketing, and digital innovation.
            </p>
            <p>
              My mission is to create spaces where talented individuals can connect, learn, and build 
              meaningful projects that drive impact across Africa and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
