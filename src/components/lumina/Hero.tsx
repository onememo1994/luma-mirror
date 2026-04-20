import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const particles = [
  { left: "8%", top: "18%", size: 4, delay: "0s" },
  { left: "14%", top: "62%", size: 3, delay: "1.2s" },
  { left: "22%", top: "35%", size: 2, delay: "2.4s" },
  { left: "28%", top: "78%", size: 3, delay: "0.6s" },
  { left: "38%", top: "12%", size: 2, delay: "1.8s" },
  { left: "46%", top: "88%", size: 4, delay: "0.3s" },
  { left: "55%", top: "8%", size: 3, delay: "2.1s" },
  { left: "62%", top: "70%", size: 2, delay: "1.5s" },
  { left: "70%", top: "25%", size: 3, delay: "0.9s" },
  { left: "78%", top: "55%", size: 4, delay: "2.7s" },
  { left: "85%", top: "82%", size: 2, delay: "1.1s" },
  { left: "92%", top: "30%", size: 3, delay: "0.4s" },
];

export const Hero = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with slow subtle zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero.png"
          alt="Luxury skincare model with luminous glowing skin"
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out scale-105"
          style={{ transform: revealed ? 'scale(1)' : 'scale(1.1)' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-rose-gold/40 animate-float"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              boxShadow: "0 0 10px rgba(232, 180, 184, 0.5)",
            }}
          />
        ))}
      </div>

      <div className="relative container py-32 text-center z-20">
        <div className="flex flex-col items-center">
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-rose-gold/20 bg-surface/40 backdrop-blur-md text-rose-gold text-[10px] tracking-[0.4em] uppercase transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles className="w-3 h-3 animate-gentle-pulse" />
            Luxury Natural Beauty
          </div>

          <h1 className="mt-10 font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] tracking-tighter text-ivory">
            <span className={`block clip-reveal ${revealed ? 'revealed' : ''}`}>
              Discover Your
            </span>
            <span className={`block italic text-rose-gold clip-reveal ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.4s' }}>
              Natural Glow.
            </span>
          </h1>

          <p className={`mt-8 max-w-xl text-lg text-ivory/60 leading-relaxed transition-all duration-1000 delay-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Premium skincare crafted with nature's finest ingredients for skin that <span className="shimmer-text">radiates from within</span>.
          </p>

          <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#products"
              className="px-12 py-4 rounded-full bg-rose-gold text-background font-medium tracking-[0.2em] text-[10px] uppercase hover:bg-ivory transition-all duration-500 shine-btn rose-gold-glow"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="px-12 py-4 rounded-full border border-ivory/20 text-ivory tracking-[0.2em] text-[10px] uppercase hover:bg-ivory/5 hover:border-rose-gold/40 transition-all duration-500"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className={`absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center text-rose-gold/40 text-[10px] tracking-[0.4em] uppercase transition-all duration-1000 delay-[1.5s] ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          Explore
          <ChevronDown className="mt-2 w-4 h-4 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};
