const brands = [
  { name: "YellowCard", logo: "YellowCard" },
  { name: "JTL", logo: "JTL" },
  { name: "ALX", logo: "ALX" },
  { name: "Angani", logo: "Angani" },
  { name: "Ndovu", logo: "Ndovu" },
  { name: "Etica", logo: "Etica" },
  { name: "Google DevFest", logo: "Google DevFest" },
  { name: "Kenya Tech Events", logo: "Kenya Tech Events" },
];

const Brands = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">
          Brands I've Worked With
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body">
          Proud to have collaborated with these amazing organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-border/30 group"
            >
              <span className="text-xl font-bold text-foreground/50 group-hover:text-primary transition-colors duration-300 font-heading">{brand.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
