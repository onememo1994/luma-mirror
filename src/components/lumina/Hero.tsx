const particles = [
  { left: "8%", top: "18%", size: 4, delay: "0s", color: "ivory" },
  { left: "14%", top: "62%", size: 3, delay: "1.2s", color: "blush" },
  { left: "22%", top: "35%", size: 2, delay: "2.4s", color: "ivory" },
  { left: "28%", top: "78%", size: 3, delay: "0.6s", color: "blush" },
  { left: "38%", top: "12%", size: 2, delay: "1.8s", color: "ivory" },
  { left: "46%", top: "88%", size: 4, delay: "0.3s", color: "blush" },
  { left: "55%", top: "8%", size: 3, delay: "2.1s", color: "ivory" },
  { left: "62%", top: "70%", size: 2, delay: "1.5s", color: "ivory" },
  { left: "70%", top: "25%", size: 3, delay: "0.9s", color: "blush" },
  { left: "78%", top: "55%", size: 4, delay: "2.7s", color: "ivory" },
  { left: "85%", top: "82%", size: 2, delay: "1.1s", color: "blush" },
  { left: "92%", top: "30%", size: 3, delay: "0.4s", color: "ivory" },
  { left: "5%", top: "92%", size: 2, delay: "2.0s", color: "blush" },
  { left: "32%", top: "50%", size: 2, delay: "1.7s", color: "ivory" },
  { left: "68%", top: "92%", size: 3, delay: "0.8s", color: "blush" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow ken-burns zoom */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Luxury skincare model with luminous glowing skin"
          className="w-full h-full object-cover animate-[kenburns_24s_ease-in-out_infinite_alternate]"
          loading="eager"
        />
        {/* Cinematic vignette — keep image visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-[floatParticle_6s_ease-in-out_infinite]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color === "blush" ? "hsl(var(--blush) / 0.7)" : "hsl(var(--ivory) / 0.6)",
              boxShadow: p.color === "blush"
                ? "0 0 8px hsl(var(--blush) / 0.6)"
                : "0 0 6px hsl(var(--ivory) / 0.4)",
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative container py-32 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blush/30 bg-background/40 backdrop-blur-sm text-blush text-[11px] tracking-[0.3em] uppercase opacity-0 animate-[fadeUp_0.9s_ease-out_0.1s_forwards]">
            <span className="w-1.5 h-1.5 rounded-full bg-blush animate-pulse" />
            Luxury Natural Beauty
          </div>

          <h1 className="mt-8 font-serif font-normal text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight text-ivory text-balance">
            <span className="block opacity-0 animate-[fadeUp_1s_ease-out_0.35s_forwards]">
              Discover Your
            </span>
            <span className="block italic text-blush opacity-0 animate-[fadeUp_1.1s_ease-out_0.7s_forwards]">
              Natural Glow.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-ivory/70 leading-relaxed opacity-0 animate-[fadeUp_0.9s_ease-out_1.1s_forwards]">
            Premium skincare crafted with nature's finest ingredients for skin that radiates from within.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 opacity-0 animate-[fadeUp_0.9s_ease-out_1.35s_forwards]">
            <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/50">Scroll to explore</span>
            <span className="block w-px h-8 bg-blush/60 origin-top animate-[scrollLine_2.4s_ease-in-out_infinite]" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeUp_0.9s_ease-out_1.5s_forwards]">
            <a
              href="#products"
              className="px-10 py-3.5 rounded-full bg-blush text-primary-foreground font-medium tracking-[0.2em] text-xs uppercase hover:bg-blush/90 transition shine-btn rose-gold-glow"
            >
              Shop Now
            </a>
            <a
              href="#products"
              className="px-10 py-3.5 rounded-full border border-ivory/30 text-ivory tracking-[0.2em] text-xs uppercase hover:bg-ivory/10 hover:border-blush/60 transition"
            >
              Discover Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
