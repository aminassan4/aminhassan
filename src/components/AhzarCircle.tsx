const AhzarCircle = () => {
  return (
    <section className="py-20 px-4 bg-accent/5">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Ahzar Circle</h2>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              <strong className="text-primary font-semibold">Ahzar Circle</strong> is an exclusive 
              community that brings together ambitious entrepreneurs, creators, and thought leaders 
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
