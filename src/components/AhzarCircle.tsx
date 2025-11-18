const AhzarCircle = () => {
  return (
    <section id="ahzar" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto animate-fade-up relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border border-border/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-heading">About Ahzar Circle</h2>
          <div className="space-y-4 text-lg text-white leading-relaxed font-body">
            <p>
              <strong className="text-primary font-bold">Ahzar Circle</strong> is a 
              community that brings together ambitious muslim entrepreneurs, creators, and thought leaders 
              who are committed to personal growth and making a meaningful impact.
            </p>
            <p>
              Through curated events, workshops, and networking opportunities, Ahzar Circle provides 
              a space for members to connect with like-minded individuals, share knowledge, and 
              collaborate on projects that matter.
            </p>
            <p>
              The community focuses on fostering deep connections, facilitating meaningful conversations, 
              and creating opportunities for members to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AhzarCircle;
