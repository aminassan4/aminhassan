const AhzarCircle = () => {
  return (
    <section id="ahzar" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border border-border/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-heading">About Ahzar Circle</h2>
          <p className="text-lg text-white leading-relaxed font-body mb-6">
            <strong className="text-primary font-bold">Ahzar Circle</strong> is a community that brings together ambitious muslim entrepreneurs, creators, and thought leaders who are committed to personal growth and making a meaningful impact.
          </p>
          <a 
            href="https://ahzarcircle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors duration-300"
          >
            Learn more About Ahzar Circle
          </a>
        </div>
      </div>
    </section>
  );
};

export default AhzarCircle;
