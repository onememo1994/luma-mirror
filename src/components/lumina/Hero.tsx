import { ChevronDown, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1614859324967-bdf413c35a334?auto=format&fit=crop&w=2000&q=80"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1522335789203-aaa6b80b6f4e?auto=format&fit=crop&w=2000&q=80";
          }}
          alt="Luxury skincare model with golden glow"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative container py-32">
        <div className="max-w-2xl animate-fade-in-slow">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blush/30 bg-blush/5 text-blush text-xs tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Luxury Natural Beauty
          </div>

          <h1 className="mt-8 font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight text-ivory text-balance">
            Discover Your
            <br />
            <span className="italic text-blush">Natural Glow.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-ivory/70 leading-relaxed">
            Crafted with the finest botanicals and refined by science — Lumina reveals the radiance
            already within you.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-8 py-3.5 rounded-full bg-blush text-primary-foreground font-medium hover:bg-blush/90 transition shadow-xl shadow-blush/20"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 transition"
            >
              Discover Products
            </a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center text-ivory/50 text-xs tracking-[0.3em] uppercase animate-float">
          Scroll to explore
          <ChevronDown className="mt-2 w-4 h-4" />
        </div>
      </div>
    </section>
  );
};
