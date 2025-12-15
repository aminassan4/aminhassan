const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border border-border/50">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4 font-body">The Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading leading-tight">
            Every creator has a story.<br />
            <span className="text-primary">Most never tell it.</span>
          </h2>
          <div className="text-xl text-white leading-relaxed font-body space-y-6">
            <p>
              I refuse to let that happen.
            </p>
            <p>
              Through <strong className="text-primary font-bold">Crevia</strong>, I'm building the infrastructure for creators to rise—to connect with brands, showcase their genius, and turn passion into profit.
            </p>
            <p className="text-2xl font-bold text-foreground font-heading">
              Because your story deserves to be heard. Loud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
