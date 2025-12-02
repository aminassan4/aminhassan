import { useRef, useState, useEffect } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ScrollingGallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];
  const rotations = ['rotate-3', 'rotate-[-2deg]', 'rotate-2', 'rotate-[-3deg]'];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch/Mouse handlers for swipe
  const handleStart = (clientX: number) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const x = clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || !containerRef.current) return;
    
    const container = containerRef.current;
    let animationId: number;
    let scrollPos = container.scrollLeft;
    const speed = window.innerWidth < 768 ? 1.5 : 1;
    
    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="py-16 px-4 overflow-hidden bg-background">
      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing touch-pan-x"
        onMouseDown={(e) => handleStart(e.pageX)}
        onMouseMove={(e) => handleMove(e.pageX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* First set of images */}
        {images.map((img, index) => (
          <div
            key={`first-${index}`}
            className={`flex-shrink-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] transform ${rotations[index]} hover:rotate-0 transition-transform duration-300`}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl shadow-[var(--shadow-elegant)] border-4 border-card pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((img, index) => (
          <div
            key={`second-${index}`}
            className={`flex-shrink-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] transform ${rotations[index]} hover:rotate-0 transition-transform duration-300`}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl shadow-[var(--shadow-elegant)] border-4 border-card pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollingGallery;
