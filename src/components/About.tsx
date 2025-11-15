const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border-l-4 border-primary">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm <strong className="text-foreground font-semibold">Amin Hassan</strong>, 
              a passionate entrepreneur and community builder dedicated to empowering the next 
              generation of African creators and innovators.
            </p>
            <p>
              Through <strong className="text-primary font-semibold">Crevia</strong> and{" "}
              <strong className="text-primary font-semibold">Ahzar Circle</strong>, I create tools 
              and communities that help creators build, launch, and monetize their creative careers 
              while fostering meaningful connections.
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
