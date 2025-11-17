import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ScrollingGallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <section className="py-16 px-4 overflow-hidden bg-background">
      <div className="relative">
        <div className="flex gap-6 animate-scroll-left">
          {/* First set of images */}
          {images.map((img, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-[var(--shadow-elegant)] border-4 border-card"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((img, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-[var(--shadow-elegant)] border-4 border-card"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingGallery;
