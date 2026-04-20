export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Luxury skincare model with luminous glowing skin"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Cinematic dark vignette — softer than before, image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative container py-32 text-center">
        <div className="animate-fade-in-slow flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blush/30 bg-background/40 backdrop-blur-sm text-blush text-[11px] tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blush" />
            Luxury Natural Beauty
          </div>

          <h1 className="mt-8 font-serif font-normal text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight text-ivory text-balance">
            Discover Your
            <br />
            <span className="italic text-blush">Natural Glow.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-ivory/70 leading-relaxed">
            Premium skincare crafted with nature's finest ingredients for skin that radiates from within.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/50">Scroll to explore</span>
            <span className="block w-px h-8 bg-blush/60" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#products"
              className="px-10 py-3.5 rounded-full bg-blush text-primary-foreground font-medium tracking-[0.2em] text-xs uppercase hover:bg-blush/90 transition shine-btn rose-gold-glow"
            >
              Shop Now
            </a>
            <a
              href="#products"
              className="px-10 py-3.5 rounded-full border border-ivory/30 text-ivory tracking-[0.2em] text-xs uppercase hover:bg-ivory/10 transition"
            >
              Discover Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
