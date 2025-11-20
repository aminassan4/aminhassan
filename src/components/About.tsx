const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border border-border/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-heading">About Me</h2>
          <div className="text-lg text-white leading-relaxed font-body">
            <p>
              I'm <strong className="text-foreground font-bold">Amin Hussein</strong>, 
              a passionate entrepreneur and community builder. Through{" "}
              <strong className="text-primary font-bold">Crevia</strong> and{" "}
              <strong className="text-primary font-bold">Ahzar Circle</strong>, I help creators 
              build and monetize their careers while fostering meaningful connections across Africa 
              and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
