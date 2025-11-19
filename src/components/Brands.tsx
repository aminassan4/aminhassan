import ihubLogo from "@/assets/logos/ihub.png";
import techmixerLogo from "@/assets/logos/techmixer.png";
import scesaLogo from "@/assets/logos/scesa.png";
import kdkLogo from "@/assets/logos/kdk.png";
import sheCodeLogo from "@/assets/logos/she-code.jpg";
import gdgLogo from "@/assets/logos/gdg.png";
import techHutLogo from "@/assets/logos/tech-hut.jpg";
import angularLogo from "@/assets/logos/angular-kenya.png";
import devopsLogo from "@/assets/logos/devops.png";
import jisortLogo from "@/assets/logos/jisort.png";

const brands = [
  { name: "iHub", logo: ihubLogo },
  { name: "TechMixer", logo: techmixerLogo },
  { name: "SCESA", logo: scesaLogo },
  { name: "Kenyan Design Konversations", logo: kdkLogo },
  { name: "She Code Africa", logo: sheCodeLogo },
  { name: "Google Developer Group", logo: gdgLogo },
  { name: "The Tech Hut", logo: techHutLogo },
  { name: "Angular Kenya", logo: angularLogo },
  { name: "Nairobi DevOps Community", logo: devopsLogo },
  { name: "Jisort Ublow", logo: jisortLogo },
];

const Brands = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-heading">
          Friends I Have Made
        </h2>
        <p className="text-xl text-white text-center mb-12 max-w-2xl mx-auto font-body">
          Proud to have collaborated with these amazing organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-border/30 group"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-full max-h-20 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
